'use strict'
var mongoose = require('mongoose')
User2 = mongoose.model('userid')

exports.checkUser = function(req, res){
    var password = req.body.password
    
    User2.find({email: req.body.email}, function(err, user){
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            console.log(user);
    
            if ( user.length === 0) {
                res.sendStatus(401)
            } else {
                if (password === user[0].password) {
                    res.send('success')
                } else {
                    res.sendStatus(401)
                }
            }

        }
        
        
    })
}


