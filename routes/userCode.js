const express = require("express");
const router = express.Router();
const UserCode = require("../models/userCode");
const UserSession = require("../models/userSession");
require("firebase/auth");

router.get("/:id", async (req, res) => {
  console.log("WORKING-1");
  UserSession.findOne({ sessId: req.params.id }).then((response) => {
    console.log(response)
    if (response) {
      UserCode.find({ creator: response.user }).then((response) => {
        res.json({ status: 200, code: response });
      });
    } else {
      res.json({ status: 401, message: "Login First" });
    }
  }).catch(err => {
    console.log(err)
  })
});

router.get("/code/:id", async (req, res) => {
  console.log(req.params);
  console.log("WORKING-2");
  UserCode.find({ _id: req.params.id }, "code").then((response) => {
    console.log(response[0].code);
    res.json({ status: 200, code: response[0].code });
  });
});

module.exports = router;
