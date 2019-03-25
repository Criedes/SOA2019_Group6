const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notification', { useNewUrlParser: true })

module.exports = mongoose