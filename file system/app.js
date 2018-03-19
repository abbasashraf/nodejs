const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/login', { useMongoClient: true }, ()=> {
    console.log('connected')
})



app.listen('7777', () => {
    console.log("port running on 7777")
});