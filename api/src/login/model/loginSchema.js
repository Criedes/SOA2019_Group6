var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
  email: String,
  password: String
});