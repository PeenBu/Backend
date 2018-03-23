var express = require('express')
var cors = require('cors')
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
bodyParser = require('body-parser')
User = require('./models/contactInfo')
User2 = require('./models/loginModel')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/local', function(error){
    if(error) throw error
    console.log('Successfully connected')
})
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./routes/serverRoute')
routes(app)


app.listen(port)
