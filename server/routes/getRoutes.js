const express = require("express");
const router = express.Router();
const cors = require("cors")
router.use(cors())

router.get("/", cors({origin: "*"}),(req, res) =>{
    res.send(`<h1>welcome to express! INDEX PAGE!</h1>`)
})

router.get("/test", (req, res) =>{
    res.send("test route")
})

module.exports = router