const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express()


var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

const loginController = require('./src/login/controller/loginController');
app.use('/api/login', loginController());

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})