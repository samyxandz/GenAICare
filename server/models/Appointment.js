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
    Department:{
        type:String,
        emun:['one','two','three','four'],
        require:true
    },
    Message:{
        type:String,
        require:true
    }

})

module.exports = mongoose.model('Appointment', AppointmentSchema);