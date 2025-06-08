const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/codeshalla"

const connectToMongo = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to the mongoose")
    })
}

module.exports = connectToMongo;