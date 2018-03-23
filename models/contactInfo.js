'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    id: {
        type: String,
        Required: 'Please enter'
    },
    firstname: {
        type: String,
        Required: 'Please enter'
    },
    lastname: {
        type: String,
        Required: 'Please enter'
    },
    mobile:{
        type: String,
        Required: 'Please enter'
    },
    email:{
        type: String,
        Required: 'Please enter'
    },
    fb:{
        type: String,
        Required: 'Please enter'
    },
    img:{
        type: String,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('User', UserSchema)