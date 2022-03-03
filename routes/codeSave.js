const express = require("express");
const router = express.Router();
const UserSession = require("../models/userSession");
const UserCode = require("../models/userCode")

router.post("/", async (req, res) => {
  UserSession.findOne({ sessId: req.body.sessionId }).then((response) => {
    if (response) {
    console.log(req.body)
    const code =req.body.code
    const name =req.body.name
    const language =req.body.lang
    const creator = response.user
    try{
        UserCode.create({code,name,language,creator}).then((response) => {
            res.json({ status: 200 });
          });
    }catch(error){
        console.log(error);
    }
    }else{
      res.json({ status: 401, message: "Login First" });
    }
  });
});

module.exports = router;
