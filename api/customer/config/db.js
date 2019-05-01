const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/payang', { useNewUrlParser: true })

module.exports = mongoose