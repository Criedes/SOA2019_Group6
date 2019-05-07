const findMechanicSchema = require('../model/mechanicSchema')
const bcrypt = require('bcrypt');
const Prometheus = require('prom-client')


const counter = new Prometheus.Counter({
    name: 'mechanic_request_total',
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
        const mechanic = await findMechanicSchema.find({ "_id": id },(err, docs) => {
            if (err) {
                return res.status(404).json({
                    success: false
                });
            };)
        res.status(200).json(mechanic)
    }
    getMechanicById()
}

exports.queryMechanicByName = (req, res) => {
    counter.inc();
    async function getMechanicById() {
        const name = req.body.name
        const mechanic = await findMechanicSchema.find({'machanic_name': {'$regex': new RegExp('^' + name, 'i')}},(err, docs) => {
            if (err) {
                return res.status(404).json({
                    success: false
                });
            };)
        res.status(200).json(mechanic)
    }
    getMechanicById()
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