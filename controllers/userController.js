'use strict'
var mongoose = require('mongoose')
User = mongoose.model('User')

exports.createUser = function(req, res){
    var newUser = new User(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
        console.log("Added User" + user)
    })
}

exports.listAllUsers = function(req, res){
    User.find({}, function(err, user){
        res.json(user)
    })
}
exports.readAUser = function(req, res){
    console.log('inside ReadAUser')
    console.log(req.params.userId)
    User.findOne({id: req.params.userId}, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}
exports.updateAUser = function(req, res){
    var newUser = {}
    newUser = req.body
    User.update({id: req.params.userId}, newUser, function(err, result){
        if (err) {
            console.log('Error updating object: ' + err);
            res.send({'error':'An error has occurred'});
        } else {
            console.log('' + result + ' document(s) updated');
            res.send(result);
        }
    });
}
exports.deleteAUser = function(req, res){
    var query = {id: req.params.userId}
    User.remove(query, function(err, user) {
        if (err) throw err
        console.log("Deleted "+ req.params.userId)
        res.json(user)
    })
}   