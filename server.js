const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 7000;
const app = express()
app.use(express.json());

// DB 
const connectDB = require("./config/db")
connectDB()

// Routing 
app.get('/', (req, res) => {
    res.send("Hello, it's psiBorg books backend")
})
const bookRoute = require('./routes/bookRoute')
app.use('/books', bookRoute)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`.bgGreen.white)
})