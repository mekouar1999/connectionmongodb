const express = require('express');
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const connectDB = require('./config/db')

app.get("/", (req,res)=>{
    res.send('salut othman je suis au back')
})

connectDB()

const port = process.env.PORT

app.listen(port,(req,res)=>{
        console.log('serveur lancé '+port)

})