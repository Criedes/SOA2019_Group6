const customerSchema = require('../model/customerSchema');

exports.registerCustomer = (req, res) => {
    let customerInfo = new customerSchema(
        {
            id : "!@#$%100",  // Test ID
            name : req.body.name,
            username : req.body.username,
            password : req.body.password,
            phone_number : req.body.phone_number,

        }
    );

    customerInfo.save( (err) => {
        if (err) return next(err);
        res.status(200).send("Registered new customer account.");
    });
}

exports.getCustomerById = (req, res) => {
    customerSchema.findById(req.params.id, (err, docs) => {
        if (err) return next(err);
        res.status(200).json(docs);
    });
}