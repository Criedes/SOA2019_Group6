const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express()

port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))

const loginController = require('./src/login/controller/loginController');
app.use('/api/login', loginController);

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
})