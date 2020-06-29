const AdminModel = require("../models/adminModel")
const bcrypt = require("bcrypt")
const { func } = require("joi")
const passport = require("passport")
const PostModel = require("../models/postModel")

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
    let post;
    res.render("admin", { title: "Admin Panel", post })
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




router.get("/admins/posts_dashboard", checkAuthenticated, (req, res) => {
    let post;
    res.render("admin_posts_dashboard", { title: "Admin Posst Dashboard", post })
})

router.get("/admins/charts", checkAuthenticated, async function (req, res) {
    const allData = await PostModel.find()
    let post;
    res.render("general_charts", { post, title: "-Admin-Charts", posts: allData })
})

module.exports = router