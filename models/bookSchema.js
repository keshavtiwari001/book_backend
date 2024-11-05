const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    publishedYear: { type: Number, require: true },
    genre: { type: String, require: true }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('books', bookSchema);