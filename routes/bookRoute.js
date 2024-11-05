const express = require('express')
const router = express.Router()
const { createBook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('../controllers/bookController')

router.get('/', getAllBooks)
router.get('/:id', getSingleBook)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router