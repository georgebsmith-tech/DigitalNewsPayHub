const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const postRoutes = require("./controllers/postRoutes");

const url = "mongodb://localhost:27017/"
const postRouter = require("./controllers/postRoutes")
const userRouter = require("./controllers/userRoutes")
const homeRouter = require("./controllers/homeRoute")
const couponRouter = require("./controllers/coupons")



const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use("/blog/css", express.static("public/css"))
app.use("/blog/images", express.static("public/images"))


app.set("views", "./views")
app.set("view engine", "ejs")

app.use(postRouter)
app.use(userRouter)
app.use(homeRouter)
app.use(couponRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("App now running on port " + PORT)
})