require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const appointment = require('./models/Appointment');
const contact = require('./models/Contact');
const ExpressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catchAsync');
const { MongoClient, ServerApiVersion } = require('mongodb');
var cors = require("cors");
const Appointment = require('./models/Appointment');
const Contact = require('./models/Contact');



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
//Appointment routes

app.get('/Appointment',catchAsync(async(req,res,next)=>{
    const Appointments= await appointment.find({})
    res.json(Appointments)
}))
app.get('/Appointment/:id',catchAsync(async(req,res,next)=>{
    const { id } = req.params;
    const Appointment = await appointment.findById(id,{returnOriginal: false})
    res.json(Appointment)
}))

app.post('/Appointment',catchAsync(async (req,res,next)=>{
    const Appointment = new appointment(req.body)
    await Appointment.save();
    res.json({Status:"Success"})

}))
app.put('/Appointment/:id',catchAsync(async(req,res,next)=>{
    const { id } = req.params

    const Appointments = await appointment.findByIdAndUpdate(id,{returnOriginal: false})
    
    res.json({status:"Success",Appointments})
}))
app.delete('/Appointment/:id',catchAsync(async(req,res,next)=>{
    const { id } = req.params;
    await Appointment.findByIdAndDelete(id);
    res.json({Status:"Success"})
}))

//Contacts


app.get('/Contacts',catchAsync(async(req,res,next)=>{
    const Contacts= await contact.find({})
    res.json(Contacts)
}))
app.get('/Contacts/:id',catchAsync(async(req,res,next)=>{
    const { id } = req.params;
    const Contacts = await contact.findById(id,{returnOriginal: false})
    res.json(Contacts)
}))
app.post('/Contacts',catchAsync(async (req,res,next)=>{
    const Contacts = new contact(req.body)
    await Contacts.save();
    res.json({Status:"Success",Contacts})

}))
app.put('/Contacts/:id',catchAsync(async(req,res,next)=>{
    const { id } = req.params
    const Contacts = await contact.findByIdAndUpdate(id,{returnOriginal: false})
    
    res.json({status:"Success",Contact})
}))
app.delete('/Contacts/:id',catchAsync(async(req,res,next)=>{
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
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