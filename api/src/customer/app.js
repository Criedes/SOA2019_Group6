
// Variables
const app = require('express')();
const customerController = require('./controller/customerController');

// Routes or End points
app.use('/customer', customerController);

module.exports = app;