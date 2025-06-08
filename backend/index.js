const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
var cors = require('cors');
const morgan = require('morgan');
const app = express()
const port = 5000

app.use(cors())

//If we want to use req.body then we have to use a middleware:
app.use(express.json())

app.use(morgan("dev"))
//Available Routes:
//The API's will at the given route:
app.use('/auth', require('./routes/auth'))

app.use('/',()=>{
    console.log("Backend is working....")
})

app.listen(port, () => {
    console.log(`Node app backend listening at port :  http://localhost:${port}`)
})