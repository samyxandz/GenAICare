require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const appointment = require('./models/Appointment');
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

app.get('/Appointment',catchAsync(async(req,res,next)=>{
    const Appointments= await appointment.find({})
    res.json(Appointments)
}))
app.get('/Appointment/:email',catchAsync(async(req,res,next)=>{
    const { email } = req.params;
    console.log(email)
    const Appointment = await appointment.find({Email:`${email}`})
    res.json(Appointment)
}))

app.post('/Appointment',catchAsync(async (req,res,next)=>{
    const Appointment = new appointment(req.body)
    await Appointment.save();
    res.json({Status:"Success"})

}))
app.put('/Appointment/:email',catchAsync(async(req,res,next)=>{
    const { email } = req.params

    const Appointment = await appointment.find({Email:`${email}`})
    const Appointments = await appointment.findByIdAndUpdate(Appointment[0]._id, { ...req.body },{returnOriginal: false})
    
    res.json({status:"Success",Appointments})
}))
app.delete('/Appointment/:email',catchAsync(async(req,res,next)=>{
    const { email } = req.params
    console.log(email)
    const Appointment = await appointment.find({Email:`${email}`})
    await appointment.findByIdAndDelete(Appointment._id)
    res.json({Status:"Success"})
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