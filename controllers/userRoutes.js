const express = require("express");
const router = express.Router()

const PostModel = require("../models/postModel");

router.get("/login", async (req, res) => {
    const allData = await PostModel.find()

    res.render("login", { title: "Login", posts: allData })
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