const mongoose = require('mongoose');
const express = require('express');
const app = express();


const cors = require('cors');
require('dotenv').config()

app.use(cors());

app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000

require('./connect');
app.use(express.json());
// const user = require('./model/userSchema');

app.use(require('./router/auth'));


//middleware
const middleware = (req, res, next) => {
    console.log('hello middleware');
    next();
}

app.get('/', (req, res) => {
    res.send('Server ok 200!')
})



app.get("/about", middleware, (req, res, next) => {
    res.send('hello world from the about')
})

app.get("/contact", middleware, (req, res, next) => {
    res.send('hello world from the contact')
})

app.get("/signIn", middleware, (req, res, next) => {
    res.send('hello world from the signIn')
})

app.get("/login", middleware, (req, res, next) => {
    res.send('hello world from the login')
})






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})