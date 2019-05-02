const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')

var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
app.options('*', cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "*")
})

const mechanicsController = require('./controller/mechanicsController')

app.use('/api/mechanics', mechanicsController)

module.exports = app