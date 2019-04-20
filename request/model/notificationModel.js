const mongoose = require('../config/db')

const notiSchema = mongoose.Schema({
  mechanic_id: {type:String, required:true},
  mechanic_username: {type:String, required:true},
  request_status: {type:Boolean, required:true},
  customer_name: {type:String, required:true},
  customer_phone: {type:String, required:true},
});

const NotiSchema = mongoose.model('mechanics', notiSchema)
module.exports = NotiSchema