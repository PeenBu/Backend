'use strict'
module.exports = function(app){
    var userList = require('../controllers/userController')
    var userLogin = require('../controllers/userLoginController')
    app.route('/users')
        .get(userList.listAllUsers)
        .post(userList.createUser)
        

    app.route('/users/:userId')
        .get(userList.readAUser)
        .delete(userList.deleteAUser)
        .post(userList.updateAUser)

    app.route('/login')
        .post(userLogin.checkUser)
}
