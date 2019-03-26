const express = require('express')
const bodyParser = require('body-parser')
const app = express()


var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const customerController = require('./controller/customerController');

app.use('/api/customers', customerController);
module.exports = app