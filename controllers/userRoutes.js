const express = require("express");
const router = express.Router()

const PostModel = require("../models/postModel");

router.get("/login", (req, res) => {

    res.render("login", { title: "Login", show: false })
})

router.get("/register", (req, res) => {

    res.render("sign_up", { show: false })

})

router.post("/register", (req, res) => {

})

router.get("/dashboard", (req, res) => {
    res.render("dashboard", { title: "DashBoard" })
})


module.exports = router;