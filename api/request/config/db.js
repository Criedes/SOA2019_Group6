const mongoose = require('mongoose');
mongoose.connect('mongodb://35.240.245.115:27017/payang', { useNewUrlParser: true })
// mongoose.connect('mongodb://localhost:27017/ChatDB', { useNewUrlParser: true })


module.exports = mongoose