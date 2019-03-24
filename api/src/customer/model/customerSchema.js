const mongoose = require('../../../config/db');

const customerSchema = mongoose.Schema({
    id : String,
    name : String,
    username : String,
    password : String,
    phone_number : String

});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;