if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()

}
const favicon = require("serve-favicon")

const express = require("express");
const bodyParser = require("body-parser");

const methodOverride = require("method-override")

const flash = require("express-flash")

const session = require("express-session")
// const Admin = require("./models/adminModel")





// const postRoutes = require("./controllers/postRoutes");
const superAdminRoute = require("./controllers/superAdminRoutes");
const postRouter = require("./controllers/postRoutes");
const userRouter = require("./controllers/userRoutes");
const couponRouter = require("./controllers/coupons");
const howItWorksRouter = require("./controllers/how_it_works")
const adminRoute = require("./controllers/adminroutes");
const postsAPIRoutes = require("./controllers/postsAPIRoutes");
const privacyRoute = require("./controllers/privacyRoute");

const passport = require("passport");
const initialize = require("./passport.config")

const AdminModel = require("./models/adminModel")
const VendorModel = require("./models/vendorsModel")
const NewsLetterSubRoutes = require("./controllers/newsletterRoutes");




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

app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }))
app.use(bodyParser.json({ limit: "500mb" }))
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

app.use("/uploads", express.static("uploads"))
app.use(express.static("public"))
app.use("/admins/css", express.static("public/css"))
app.use("/admins/images", express.static("public/images"))
app.use("/js", express.static("public/js"))
app.use("/admins/js", express.static("public/js"))

app.use(postRouter)
app.use(userRouter)
app.use(couponRouter)
app.use(adminRoute)
app.use(howItWorksRouter)
app.use(NewsLetterSubRoutes)
app.use(superAdminRoute)
app.use(privacyRoute)



app.use("/api", postsAPIRoutes)





const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("App now running on port " + PORT);
    console.log(process.env.ATLAS_DIGITAL_PASS)
})