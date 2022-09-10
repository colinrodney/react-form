const express = require("express");
const router = express.Router()


router.get("/", (req, res) =>{
    res.send(`<h1>welcome to express! INDEX PAGE!</h1>`)
})

router.get("/test", (req, res) =>{
    res.send("welcome to express! TEST ROUTE PAGE!")
})

// router.post("/", (req, res) =>{
//     res.send(`registration successful`)
// })

module.exports = router