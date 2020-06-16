const express = require("express");
const bodyParser = require("body-parser");


// const postRoutes = require("./controllers/postRoutes");
const postRouter = require("./controllers/postRoutes");
const userRouter = require("./controllers/userRoutes");
const homeRouter = require("./controllers/homeRoute");
const couponRouter = require("./controllers/coupons");
const adminRouter = require("./controllers/adminRouter");





const app = express()
app.use("/admin", adminRouter)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
    console.log("App now running on port " + PORT);
    console.log(process.env.ATLAS_DIGITAL_PASS)
})