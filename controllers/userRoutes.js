const express = require("express");
const router = express.Router()

const PostModel = require("../models/postModel");
const PostCategory = require("../models/postCategoryModel")
const CouponModel = require("../models/couponModel")

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

router.get("/create-account", async (req, res) => {
    const allData = await PostModel.find().sort({ date: -1 })
    const categories = await PostCategory.find().select({ name: 1 })

    let post;

    res.render("create-acct", { show: false, post, title: "User Registration", posts: allData, categories })

})

router.post("/register", (req, res) => {

})

router.get("/dashboard", async (req, res) => {
    let post;
    const categories = await PostCategory.find().select({ name: 1 })
    res.render("dashboard", { title: "DashBoard", post, categories })
})



router.get("/registration/coupon", (req, res) => {
    let post;
    let categories = []
    res.render("new-user-coupon-entry", { post, title: "Coupon Verification", categories })
})


router.post("/registration/coupon", async (req, res) => {
    console.log(req.body)
    const data = await CouponModel.find({ coupon: req.body.coupon })
    if (data.length === 1 && data[0].used === false) {
        console.log("Found and un used")
        res.send(data)
        // res.redirect("/login")
    } else if (data.length === 1 && data[0].used === true) {
        console.log("Found but used")
        res.send({ "message": "done 1" })
    } else {
        console.log("Nothing")
        res.send({ "message": "nothing 1" })
    }


    // console.log("linked")
    // console.log(req.body)
    // // console.log(data)
    // res.end()
})

module.exports = router;