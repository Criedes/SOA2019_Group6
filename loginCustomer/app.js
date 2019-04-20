const express = require('express')
const bodyParser = require('body-parser')
const app = express()


var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const loginController = require('./controller/loginController');

app.use('/api/auth', loginController);
module.exports = app