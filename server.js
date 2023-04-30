require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const drinks = require('./models/drinks.js')


app.get('/drinks/',(req,res) => {
    res.render('drinks_index.ejs')
})



app.listen(port, () => {
    console.log('Server is listening on Port :', port);
})