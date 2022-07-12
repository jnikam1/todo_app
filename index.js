const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./routes/todo.routes')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())

app.use('/todo',router)

app.get('/',(req,res)=>{
    res.send("Welcome to Todo App")
})


const PORT = process.env.PORT

app.listen(PORT || 8080,()=>{
    console.log("Succesfully connected to Port "+ PORT)

})

const mongoURI = process.env.MONGOURI
mongoose.connect(mongoURI)
.then(()=>{
    console.log("Sucessfully connected to Database")
})
.catch((error)=>{
    console.log("Error connecting to Database")
})