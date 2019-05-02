const mongoose = require('../util/db');

const customerSchema = mongoose.Schema({
    name : {type:String, required: true},
    username : {type:String, required: true},
    password : {type:String, required: true},
    phone_number : {type:String, required: true},
    status : {type:String , require: true},
    mechanic_id : {type: String , require: true},
});

const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;