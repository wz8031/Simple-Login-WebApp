const express = require('express')
const path = require('path')
const connectDB = require ('./DB/connection')
const app = express()
const port = process.env.Port || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/Register', require('./API/register'));
app.use('/api/login', require('./API/login'));


app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})
