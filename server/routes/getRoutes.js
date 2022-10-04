const express = require("express");
const router = express.Router();


router.get("/", (req, res) =>{
    res.send(`<h1>welcome to express! INDEX PAGE!</h1>`)
})

module.exports = router