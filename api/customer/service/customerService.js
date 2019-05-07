const customerSchema = require('../model/customerSchema');
const bcrypt = require('bcrypt');
const Prometheus = require('prom-client')

const counter = new Prometheus.Counter({
    name: 'customer_request_total',
    help: 'metric_help'
  });

exports.registerCustomer = (req, res) => {
    // console.log(req.body)
    counter.inc();
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
                    phone_number: req.body.phone,
                    role: "customer",
                    status: 'null',
                    request_mechanic_id: 'null',
                });
                customerInfo.save((err) => {
                    if (err) {
                        return res.status(401).json({
                            success: err
                        });
                    };
                    res.status(201).json(customerInfo);
                });
            })
        })
    }
    registCustomer();
}

exports.getCustomerById = (req, res) => {
    counter.inc();
    customerSchema.findById(req.params.id, (err, docs) => {
        if (err) {
            return res.status(404).json({
                success: false
            });
        };
        res.status(200).json(docs);
    });
}