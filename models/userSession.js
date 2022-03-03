const mongoose = require('mongoose')

const userSessions = new mongoose.Schema({
    sessId:{
        type:String,
        required: true
    },
    expire:{
      type:Number,
      required: true
    },
    user:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


module.exports = mongoose.model('UserSession', userSessions)