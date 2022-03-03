const { response } = require("express");
const express = require("express");
const router = express.Router();
const ShareCode = require('../models/shareCode')

router.post("/", (req, res) => {
    console.log(req.body)
    const code =req.body.code
    const input =req.body.input
    const output =req.body.output
    ShareCode.create({code,input, output}).then((response) => {
        res.json({ status: 200, response:response });
      });
});


router.get("/:id", (req, res) => {
    console.log(req.params)
    ShareCode.findOne({_id:req.params.id}).then(response => {
        console.log(response)
        res.send(response)
    })
});


module.exports = router;
