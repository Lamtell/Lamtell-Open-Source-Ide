const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
    email:{
      type:String,
      required: true
    },
    name:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('UserInfo', userInfoSchema)