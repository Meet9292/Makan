const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

// Mongoose setup
const PORT = 4000

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`PORT : ${PORT}`);
    })
})
.catch((e)=>{
    console.log(e);
})