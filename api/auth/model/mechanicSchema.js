const mongoose = require('../util/db')

const mechanicSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    garagename: { type: String, required: true },
    machanic_name: { type: String, required: true },
    coordinate: {
        lat: { type: String, required: true },
        lng: { type: String, required: true }
    },
    number_of_customer: {type:Number, required: true},
    address: {type:String, required: true},
    contact: {type:String, required: true},
    status: {type:Boolean, required: true},
    price: {
        patch_rubber: { type: Number, required: true },
        change_rubber: { type: Number, required: true }
    },
    role: { type: String, require: true },
    request_status_service: { type: Boolean, required: true },
    request_user_id: { type: String, required: true },
    imgUrl: { type: String, required: true }
})

const Mechanic = mongoose.model('mechanics', mechanicSchema)
module.exports = Mechanic