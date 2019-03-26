const mongoose = require('../config/db')
const loginSchema = mongoose.Schema({
  email: String,
  salt: String,
  hash: String
});

const LoginSchema = mongoose.model('user_authen', loginSchema)
module.exports = LoginSchema