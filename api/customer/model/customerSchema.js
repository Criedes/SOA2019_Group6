const mongoose = require('../util/db');

const customerSchema = mongoose.Schema({
    name : {type:String, required: true},
    username : {type:String, required: true},
    password : {type:String, required: true},
    phone_number : {type:String, required: true},
    status : {type:String , required: true},
    role: {type:String , required: true},
    request_mechanic_id : {type: String , required: true},
});

const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;