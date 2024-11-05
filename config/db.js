const mongoose = require('mongoose')
const colors = require('colors')
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected'.bgGreen.white)
    } catch (error) {
        console.log('err in DB connection : ', error)
    }
}

module.exports = connectDB;