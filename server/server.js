const express = require("express")
const app = express()
let indexRoute= require("./routes/getRoutes")
let postRoute = require("./routes/postRoutes")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/test");
const registrants = mongoose.model("registrants", {name: String})
let testUser = new registrants({name: "Hal"})
testUser.save().then(() => console.log(testUser.name))
// mongoose.registrants.insertOne({name: testUser.name})

const port = 9000


app.use("/", indexRoute)
app.use("/post", postRoute)

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

