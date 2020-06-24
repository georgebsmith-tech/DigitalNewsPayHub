const AdminModel = require("../models/adminModel")
const bcrypt = require("bcrypt")
const { func } = require("joi")
const passport = require("passport")

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/admins/login")
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/admins/posts_dashboard")
        return
    }
    next()
}


const router = require("express").Router()

router.get("/admins/login", checkNotAuthenticated, (req, res) => {
    res.render("admin", { title: "Admin Panel" })
})

router.post("/admins/login", passport.authenticate("local", {
    successRedirect: "/admins/posts_dashboard",
    failureRedirect: "/admins/login",
    failureFlash: true

}))

router.delete("/admins/logout", (req, res) => {
    req.logOut()
    res.redirect("/admins/login")
})
// const data = await AdminModel.findOne({ username: req.body.name })

// const AWS = require("aws-sdk")



// if (data) {

//     const isTrue = await bcrypt.compare(req.body.password, data.password)
// console.log(isTrue)

// console.log("Gotten data is " + data)
// if (isTrue) {
//     // console.log(data)
//     res.render("admin_posts_dashboard", { title: "Admin Panel" })
// } else {
//     console.log("Invalid username or  password")
//     }
// } else {
//     console.log("Invalid username or  password")
// }



// })

router.get("/admins/posts_dashboard", checkAuthenticated, (req, res) => {
    res.render("admin_posts_dashboard", { title: "Admin Posst Dashboard" })
})


// router.post("/admins/add_post", async (req, res) => {


// const body = req.body
// res.end()
// const salt = await bcrypt.genSalt(10)
// const hashedPword = await bcrypt.hash(body.title, salt)
// console.log(salt)
// console.log(body)
// console.log(hashedPword)

// })

module.exports = router