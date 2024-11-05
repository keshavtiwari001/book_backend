const mongoose = require("mongoose")
const Books = require('../models/bookSchema')

exports.createBook = async (req, res) => {
    try {
        const data = req.body
        const book = new Books(data)
        await book.save();
        res.status(201).json({ message: "book added successfully !" })

    } catch (error) {
        console.log("err in creating Book", error)
        res.status(400).json({ message: "book not added!!" });
    }
}

exports.getAllBooks = async (req, res) => {
    const books = await Books.find()
    res.status(200).json(books)
};

exports.getSingleBook = async (req, res) => {
    const bookID = req.params.id;
    const book = await Books.findById(bookID);
    if (!book) {
        return res.status(400).json({ message: "book not found !" })
    }
    res.status(200).json(book)
}

exports.updateBook = async (req, res) => {
    const bookID = req.params.id;
    const data = req.body;
    const book = await Books.findByIdAndUpdate(bookID, data)
    res.status(200).json(book)
}

exports.deleteBook = async (req, res) => {
    const bookID = req.params.id;
    const book = await Books.findByIdAndDelete(bookID)
    res.status(200).json({ message: "book removed !", book })
}