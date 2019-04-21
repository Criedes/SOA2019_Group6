const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/payang', { useNewUrlParser: true })

module.exports = mongoose