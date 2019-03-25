const findMechanicSchema = require('../model/mechanicSchema')
const bcrypt = require('bcrypt');
exports.findMechanic = (req, res) => {
    async function getMechanicAll() {
        const mechanicAll = await findMechanicSchema.find()
        res.status(200).json(mechanicAll)
    }
    getMechanicAll();
}

exports.findMechanicById = (req, res) => {
    async function getMechanicById() {
        const id = req.params.id
        const mechanic = await findMechanicSchema.find({ "_id": id })
        res.status(200).json(mechanic)
    }
    getMechanicById()
}

exports.findMechanicByShopName = (req, res) => {
    async function getMechanicByShopName() {
        const shop_name = req.params.shopname
        const mechanic = await findMechanicSchema.find({ "garagename": shop_name })
        res.status(200).json(mechanic)
    }
    getMechanicByShopName()
}

exports.updateStatusById = (req, res) => {
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
    async function updateCount() {
        const _id = req.params.id
        const result = await findMechanicSchema.findOneAndUpdate({ _id: _id }, { $inc: { number_of_customer: 1 } }, { new: true })
        res.status(200).json(result)
    }
    updateCount();
}

exports.registerMechanic = (req, res) => {
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
                    number_of_customer: req.body.number_of_customer,
                    address: req.body.address,
                    join_date: req.body.join_date,
                    contact: req.body.contact,
                    status: req.body.status,
                    price: {
                        patch_rubber: req.body.price.patch_rubber,
                        change_rubber: req.body.price.change_rubber
                    },
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