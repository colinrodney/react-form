const express = require("express")
const app = express()
let index = require("./routes/home")
app.use("/", index) 
let cors = require("cors")
const port = 9000



app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

