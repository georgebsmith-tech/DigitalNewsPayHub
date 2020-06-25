const express = require("express");
const router = express.Router()

const PostModel = require("../models/postModel");

router.get("/login", async (req, res) => {
    const allData = await PostModel.find()
    let post;

    res.render("login", { title: "Login", posts: allData, post })
})

router.get("/register", (req, res) => {

    let post;
    res.render("sign_up", { show: false, post })

})

router.post("/register", (req, res) => {

})

router.get("/dashboard", (req, res) => {
    let post;
    res.render("dashboard", { title: "DashBoard", post })
})


module.exports = router;