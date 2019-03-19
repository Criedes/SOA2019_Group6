const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/payang', { useNewUrlParser: true })

const mechanicSchema = mongoose.Schema({
    username : String,
    password : String,
    garagename : String,
    machanicname :String,
    coordinate : {
        lat : String,
        lng : String
    },
    number_of_customer : Number,
    address : String,
    join_date : String,
    contact : String,
    status : Boolean
})

const Mechanic = mongoose.model('mechanics', mechanicSchema)
module.exports = Mechanic