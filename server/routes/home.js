const express = require("express");
const router = express.Router()


router.get("/", (req, res) =>{
    res.send(`welcome to express! INDEX PAGE!`)
})

router.get("/test", (req, res) =>{
    res.send("test route")
})


module.exports = router