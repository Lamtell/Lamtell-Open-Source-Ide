const mongoose = require('mongoose')

const shareCodeSchema = new mongoose.Schema({
    code:{
      type:String,
      required: true
    },
    input:{
        type:String,
        default: ""
    },
    output:{
        type:String,
        default: ""
    }
})


module.exports = mongoose.model('ShareCode', shareCodeSchema)