const express = require("express")
const router = express.Router()
const UserSession = require("../models/userSession");
router.get("/", (req, res) => {
    // console.log(req.headers.cookie.slice(7))
    UserSession.findOneAndDelete({sessId:req.query.id}).then(response => {
        console.log(response)
        res.json({status:200, sessId:null,smessage:"LOGGED OUT"})
    })
})

module.exports = router