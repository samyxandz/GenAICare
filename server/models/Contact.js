const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    Name:{
        type:String,
        require:true,
        default:'john doe'
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
        emun:['one','two','three','four'],
        require:true
    }})

module.exports = mongoose.model('Contact', ContactSchema);