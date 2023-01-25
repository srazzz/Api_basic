// install nodemon by :npm install nodemon --save-dev
// run code by using : nodemon run start
const express = require('express')
const mongoose = require('mongoose')
const url="mongodb://localhost/SampleData"

const app = express()

mongoose.set('strictQuery', true)
mongoose.connect(url)
const con =  mongoose.connection

con.on('open', () => {
    console.log("connected...")
})
app.use(express.json())

const dataRouter = require('./routes/data')
app.use('/data',dataRouter)


app.listen(9000 , function(){
    console.log("Server started...")
})