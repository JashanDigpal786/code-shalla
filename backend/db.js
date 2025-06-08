const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://jashan:password%40123@cluster0.y5pf8br.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to the mongoose")
    })
}

module.exports = connectToMongo;