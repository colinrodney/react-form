const express = require("express")
const app = express()
const port = 9000


app.get("/", (req, res) =>{
    res.send("welcome to express!")
})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

