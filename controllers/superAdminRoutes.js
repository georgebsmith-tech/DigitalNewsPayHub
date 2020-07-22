const router = require("express").Router()
const voucherCode = require("voucher-code-generator")
const CouponModel = require("../models/couponModel")


router.get("/admin/coupons", (req, res) => {
    let post;
    res.render("generate-coupons", { post, title: "Token-Admin Dashboard" })
})

// router.get("/api/coupons", async function (req, res) {
//     res.send({
//         message: "Worked"
//     })
// })

router.get("/api/coupons", async (req, res) => {
    const data = await CouponModel.find().limit(20).select({ coupon: 1 })
    return res.status(200).json({
        data: data
    })
})
router.post("/api/coupons", async (req, res) => {
    const vouchers = voucherCode.generate({
        count: req.body.number * 1,
        length: 7,
        postfix: "dnp"
    })
    vouchers.forEach(async voucher => {
        const theVoucher = {
            coupon: voucher
        }
        let coupon = new CouponModel(theVoucher)
        const data = await CouponModel.find({ coupon: voucher })

        if (!data.length) {
            coupon.save()
                .then(data => {
                    console.log("Voucher saved!!" + data)
                    // index++;
                })
        } else {
            console.log("Record Exists" + data)
        }

    })
    return res.status(200).json({
        data: vouchers
    })
})






module.exports = router