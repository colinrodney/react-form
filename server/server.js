const express = require("express")
const app = express()
<<<<<<< HEAD
let getRoutes = require("./routes/getRoutes")
let postRoutes = require("./routes/postRoutes")
// let register = require("./routes/register")
const port = 9000

app.use("/", getRoutes)
app.use("/post", postRoutes)
=======
let index = require("./routes/home")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/test");
const registrants = mongoose.model("registrants", {name: String})
let testUser = new registrants({name: "Hal"})
testUser.save().then(() => console.log(testUser.name))
// mongoose.registrants.insertOne({name: testUser.name})

const port = 9000


app.use("/", index)
>>>>>>> 9af5b1c7d38adf22b50f35a7f9e2d2b07be78a5d

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

