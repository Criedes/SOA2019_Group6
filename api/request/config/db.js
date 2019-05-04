const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL | 'mongodb://localhost:27017/notification', { useNewUrlParser: true })

module.exports = mongoose