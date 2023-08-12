const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('User', UserSchema);