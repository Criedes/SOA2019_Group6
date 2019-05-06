const mongoose = require('../config/db')

var Message = mongoose.model('messages', {
    personID: [],
    persons: [],
    messages: []
})


module.exports = Message