const express = require("express")
const app = express()
let testRoute = require("./routes/testRoutes")
const port = 9000


app.use("/test", testRoute)
// app.use("/", testRoute)
// app.get("/", (req, res) =>{
//     res.send("welcome to express!")
// })

// app.post("/", (req, res) =>{
//     res.send(`registration successful`)
// })

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

