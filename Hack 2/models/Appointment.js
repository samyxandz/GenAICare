const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    Name:{
        type:String,
        require:true,
        default:'john doe'
    },
    PhoneNumber:{
        type:String,
        required:true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Issue:{
        type:String,
        required: true,
        default:'Generic'
    },
    Date:{
        type:Date,
        require:true,
    },
    Department:{
        type:String,
        emun:['cardiology'],
        require:true
    }})

module.exports = mongoose.model('Appointment', AppointmentSchema);