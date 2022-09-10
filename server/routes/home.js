const express = require("express");
const router = express.Router()

let cors = require("cors")
router.use(cors())
router.get("/", cors({origin: "*"}), (req, res) =>{
    res.send(`welcome to express! INDEX PAGE!`)
})

router.get("/test", (req, res) =>{
    res.send("test route")
})


module.exports = router