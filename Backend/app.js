const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const cors = require('cors')
const app = express();

// Middleware to parse JSON request bodies
// app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world")
})

module.exports = app;