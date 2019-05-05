const mongoose = require('mongoose');
mongoose.connect('mongodb://139.162.25.245:27017/payang', { useNewUrlParser: true })

module.exports = mongoose