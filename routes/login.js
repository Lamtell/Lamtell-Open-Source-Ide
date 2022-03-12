const express = require("express");
const router = express.Router();
const firebase = require("firebase/app");
const UserSession = require("../models/userSession");
const UserInfo = require("../models/userInfo")
const { v4: uuidv4 } = require('uuid');
require("firebase/auth");
router.post("/", (req, res) => {
  console.log(req.body)
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((result) => {
       //console.log(result.code)
        UserInfo.findOne({email:req.body.email}).then((userinfo) => {
          console.log(userinfo)
          UserSession.create({sessId:uuidv4() , user:result.user.uid}).then((response) => {
            res.json({ message: "Login Successful", status:200,name:userinfo.name,sessId:response.sessId});
          })
        })
    })
    .catch((error) => {
      if(error.code === 'auth/wrong-password'){
        res.json({ message: 'wrong informantion', status:403});
      }else if(error.code === 'auth/user-not-found'){
        res.json({ message: error.code, status:404});
      }
    });
});

module.exports = router;
