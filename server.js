if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const express = require("express");
const bodyParser = require("body-parser");

const methodOverride = require("method-override")

const flash = require("express-flash")

const session = require("express-session")
// const Admin = require("./models/adminModel")





// const postRoutes = require("./controllers/postRoutes");
const postRouter = require("./controllers/postRoutes");
const userRouter = require("./controllers/userRoutes");
const couponRouter = require("./controllers/coupons");
// const adminRouter = require("./controllers/adminRouter");
const adminRoute = require("./controllers/adminroutes");
const passport = require("passport");
const initialize = require("./passport.config")

const AdminModel = require("./models/adminModel")
const VendorModel = require("./models/vendorsModel")
const app = express()


initialize(passport, async name => {
    // console.log("The" + user)
    try {
        const theUser = await AdminModel.findOne({ username: name })
        // console.log(theUser)
        return theUser
    } catch (err) {
        throw err

    }

},
    async id => {
        try {
            const deUser = await AdminModel.findOne({ _id: id })
            // console.log(theUser)
            return deUser
        } catch (err) {
            throw err

        }
    })

// app.use("/admin", adminRouter)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(flash())
app.use(session({
    secret: "my secret", //process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false

}))

app.use(methodOverride("_method"))

app.use(passport.initialize())
app.use(passport.session())


app.set("views", "./views")
app.set("view engine", "ejs")


app.use(express.static("public"))
app.use("/admins/css", express.static("public/css"))
app.use("/admins/images", express.static("public/images"))
app.use("/js", express.static("public/js"))
app.use("/admins/js", express.static("public/js"))

app.use(postRouter)
app.use(userRouter)
app.use(couponRouter)
app.use(adminRoute)




const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("App now running on port " + PORT);
    console.log(process.env.ATLAS_DIGITAL_PASS)
})