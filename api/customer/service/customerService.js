const customerSchema = require('../model/customerSchema');
const bcrypt = require('bcrypt');

exports.registerCustomer = (req, res) => {
    console.log(req.body)
    async function registCustomer() {
        const saltRounds = 10;
        await bcrypt.genSalt(saltRounds, function (err, getsalt) {
            bcrypt.hash(req.body.password, getsalt, function (err, gethash) {
                salt = getsalt
                hash = gethash
                const customerInfo = new customerSchema({
                    name: req.body.name,
                    username: req.body.username,
                    password: hash,
                    phone_number: req.body.phone
                });
                customerInfo.save((err) => {
                    if (err) {
                        return res.status(401).json({
                            success: err
                        });
                    };
                    res.status(201).json({
                        success: true
                    });
                });
            })
        })
    }

    registCustomer();
}

exports.getCustomerById = (req, res) => {
    customerSchema.findById(req.params.id, (err, docs) => {
        if (err) {
            return res.status(404).json({
                success: false
            });
        };
        res.status(200).json(docs);
    });
}