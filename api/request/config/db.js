const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/notification', { useNewUrlParser: true })

module.exports = mongoose