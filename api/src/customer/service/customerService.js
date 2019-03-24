const customerSchema = require('../model/customerSchema');

exports.registerCustomer = (req, res) => {
    var name = req.body.name;
    var username = req.body.username;
    var password = req.body.password;
    var phone_number = req.body.phone_number;
}

exports.getCustomerById = (req, res) => {
    
}