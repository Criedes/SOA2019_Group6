const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express()

var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


module.exports = app