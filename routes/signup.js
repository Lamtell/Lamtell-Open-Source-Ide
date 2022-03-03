const express = require("express")
const router = express.Router()
const firebase = require("firebase/app");
const UserInfo = require("../models/userInfo")

require("firebase/auth");
router.post("/", (req, res) => {
    console.log(req.body)
    firebase.auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((result) => {
      UserInfo.create({email:req.body.email,name:req.body.name}).then(() => {
        res.json({message:"Email Added",name:req.body.name, status:200, id:result.user.uid})
      })
    }).catch(error => {
      console.log(error)
      res.json({error:error, status:403})
    })
})

module.exports = router