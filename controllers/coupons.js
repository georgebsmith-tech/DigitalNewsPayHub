const express = require("express");
const router = express.Router()

const VendorsVendors = require("../models/vendorsModel");


router.get("/voucher-vendors", async (req, res) => {
    let post;
    try {
        const records = await VendorsVendors.find()
        res.render("vendors", { title: "Coupon vendors", records, post })
    } catch (err) {
        throw err
    }
})



module.exports = router;



