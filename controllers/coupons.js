const express = require("express");
const router = express.Router()

const VendorsVendors = require("../models/vendorsModel");
const PostCategory = require("../models/postCategoryModel")


router.get("/voucher-vendors", async (req, res) => {
    let post;
    try {
        const records = await VendorsVendors.find()
        const categories = await PostCategory.find().select({ name: 1 })
        res.render("vendors", { title: "Coupon vendors", records, post, categories })
    } catch (err) {
        throw err
    }
})



module.exports = router;



