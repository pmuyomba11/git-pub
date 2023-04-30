require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const drinks = require('./models/drinks.js')
const food = require('./models/food.js')

//index route created
app.get('/drinks/',(req,res) => {
    res.render('drinks_index.ejs',{
        allDrinks : drinks,
    })
})

app.get('/food/',(req,res) => {
    res.render('food_index.ejs', {
        allFoods : food,
    })
})

//show route created
app.get('/drinks/:id', (req,res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],

    })
})

app.get('/food/:id',(req,res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id],
    })
})




app.listen(port, () => {
    console.log('Server is listening on Port :', port);
})