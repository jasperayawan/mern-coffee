const mongoose = require('mongoose')

const {model} = mongoose;

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String,  required: true}
})

const userModel = model('User', userSchema)

module.exports = userModel;