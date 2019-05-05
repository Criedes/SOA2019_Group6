const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())

const customerController = require('./controller/customerController');

app.use('/api/customers', customerController);
module.exports = app
