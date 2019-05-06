const findMechanicSchema = require('../model/mechanicSchema')
const bcrypt = require('bcrypt');
const Prometheus = require('prom-client')


const counter = new Prometheus.Counter({
    name: 'customer_request_total',
    help: 'metric_help'
  });

exports.findMechanic = (req, res) => {
    counter.inc();
    async function getMechanicAll() {
        const mechanicAll = await findMechanicSchema.find()
        res.status(200).json(mechanicAll)
    }
    getMechanicAll();
}

exports.findMechanicById = (req, res) => {
    counter.inc();
    async function getMechanicById() {
        const id = req.params.id
        const mechanic = await findMechanicSchema.find({ "_id": id })
        res.status(200).json(mechanic)
    }
    getMechanicById()
}

exports.queryMechanicByName = (req, res) => {
    counter.inc();
    async function getMechanicById() {
        const name = req.body.name
        const mechanic = await findMechanicSchema.find({'machanic_name': {'$regex': new RegExp('^' + name, 'i')}})
        res.status(200).json(mechanic)
    }
    getMechanicById()
}

exports.findMechanicByShopName = (req, res) => {
    counter.inc();
    async function getMechanicByShopName() {
        const shop_name = req.params.shopname
        const mechanic = await findMechanicSchema.find({ "garagename": shop_name })
        res.status(200).json(mechanic)
    }
    getMechanicByShopName()
}

exports.updateStatusById = (req, res) => {
    counter.inc();
    async function checkStatus() {
        const id = req.params.id
        const status_obj = await findMechanicSchema.find({ "_id": id }).select({ "status": 1 })

        if (status_obj[0].status) {
            const result_updated = await findMechanicSchema.update({ "_id": id }, {
                $set: {
                    status: false
                }
            }, { new: true })
            res.status(200).json(result_updated)
        } else {
            const result_updated = await findMechanicSchema.update({ "_id": id }, {
                $set: {
                    status: true
                }
            }, { new: true })
            res.status(200).json(result_updated)
        }
    }
    checkStatus()
}

exports.updateCountById = (req, res) => {
    counter.inc();
    async function updateCount() {
        const _id = req.params.id
        const result = await findMechanicSchema.findOneAndUpdate({ _id: _id }, { $inc: { number_of_customer: 1 } }, { new: true })
        res.status(200).json(result)
    }
    updateCount();
}

exports.registerMechanic = (req, res) => {
    counter.inc();
    async function registMechanic() {
        const saltRounds = 10;
        await bcrypt.genSalt(saltRounds, function (err, getsalt) {
            bcrypt.hash(req.body.password, getsalt, function (err, gethash) {
                salt = getsalt
                hash = gethash
                const newMechanic = new findMechanicSchema({
                    username: req.body.username,
                    password: hash,
                    garagename: req.body.garagename,
                    machanic_name: req.body.machanic_name,
                    coordinate: {
                        lat: req.body.coordinate.lat,
                        lng: req.body.coordinate.lng
                    },
                    number_of_customer: 0,
                    address: req.body.address,
                    contact: req.body.contact,
                    status: false,
                    price: {
                        patch_rubber: req.body.price.patch_rubber,
                        change_rubber: req.body.price.change_rubber
                    },
                    request_status_service : false,
                    request_user_id: "id",
                    role: "mechanic",
                    imgUrl:req.body.imgurl
                })
                newMechanic.save(function (err, post) {
                    if (err) { 
                        console.log(err)
                        return res.status(400).json({
                        success: false
                    })}
                    res.status(201).json({
                        success: true
                    })
                  })
            })
        })
        

    }

    registMechanic();
}