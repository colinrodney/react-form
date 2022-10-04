const express = require("express");
const router = express.Router()

router.post("/post", (req, res) =>{
    res.send(`post route`)
})

module.export = router