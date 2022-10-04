const express = require("express")
const app = express()
let getRoutes = require("./routes/getRoutes")
let postRoutes = require("./routes/postRoutes")
// let register = require("./routes/register")
const port = 9000

app.use("/", getRoutes)
// app.use("/register", register)

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

