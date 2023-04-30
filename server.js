require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const drinks = require('./models/drinks.js')

//index route created
app.get('/drinks/',(req,res) => {
    res.render('drinks_index.ejs',{
        allDrinks : drinks,
    })
})

//show route created
app.get('/drinks/:id', (req,res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id]
    })
})




app.listen(port, () => {
    console.log('Server is listening on Port :', port);
})