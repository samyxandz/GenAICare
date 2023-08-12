require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const ExpressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catchAsync');
const { MongoClient, ServerApiVersion } = require('mongodb');
var cors = require("cors");



const app = express();
const uri=process.env.Db_Url;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
    useNewUrlParser: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.json({home:'xjc'})
});


/*
app.post('/hi',catchAsync(async (req, res, next) => {
    
    const campground = new User({email:'asddddgfgfvdfvd.email'});
    await campground.save();
    res.json({campground})

}));
*/

app.post('/submit',catchAsync(async (req,res,next)=>{
console.log(req.body)
}))
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})



app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.json({out : err.message})
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})