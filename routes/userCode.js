const express = require("express");
const router = express.Router();
const UserCode = require("../models/userCode");
const UserSession = require("../models/userSession");
require("firebase/auth");

router.get("/:id", async (req, res) => {
  UserSession.findOne({ sessId: req.params.id }).then((response) => {
    //console.log(response)
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
  console.log("WROING")
  UserCode.find({ _id: req.params.id }, "code").then((response) => {
    console.log(response[0].code);
    res.json({ status: 200, code: response[0].code });
  });
});


router.post("/delete/:id", async (req, res) => {
  console.log(req.params);
  console.log("WORKING-3");
  UserCode.deleteOne({ _id: req.params.id }).then((response) => {
    res.json({ status: 200});
  });
});

module.exports = router;
