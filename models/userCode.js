const mongoose = require('mongoose')

const userCodeSchema = new mongoose.Schema({
    code:{
        type:String,
        required: true
    },
    name:{
      type:String,
      required: true
    },
    language:{
        type:String,
        required: true,
    },
    creator:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


module.exports = mongoose.model('UserCode', userCodeSchema)