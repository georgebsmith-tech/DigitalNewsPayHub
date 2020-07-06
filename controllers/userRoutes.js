const express = require("express");
const router = express.Router()

const PostModel = require("../models/postModel");
const PostCategory = require("../models/postCategoryModel")

router.get("/login", async (req, res) => {
    const allData = await PostModel.find().sort({ date: -1 })
    const categories = await PostCategory.find().select({ name: 1 })
    let post;

    res.render("login", { title: "Login", posts: allData, post, categories })
})

router.get("/register", async (req, res) => {
    const allData = await PostModel.find().sort({ date: -1 })
    const categories = await PostCategory.find().select({ name: 1 })

    let post;

    res.render("register", { show: false, post, title: "User Registration", posts: allData, categories })

})

router.post("/register", (req, res) => {

})

router.get("/dashboard", async (req, res) => {
    let post;
    const categories = await PostCategory.find().select({ name: 1 })
    res.render("dashboard", { title: "DashBoard", post, categories })
})


module.exports = router;