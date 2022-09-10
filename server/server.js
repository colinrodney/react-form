const express = require("express")
const app = express()
let index = require("./routes/home")
const port = 9000


app.use("/", index)

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

