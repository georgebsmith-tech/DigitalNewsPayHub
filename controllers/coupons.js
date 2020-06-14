const express = require("express");
const router = express.Router()
const records = [
    {
        name: "smith",
        phone: "+2348165335988",
        bank: "GTB"

    },
    {
        name: "smith",
        phone: "+2348165335988",
        bank: "GTB"

    },
    {
        name: "smith",
        phone: "+2348165335988",
        bank: "GTB"

    },
    {
        name: "smith",
        phone: "+2348165335988",
        bank: "GTB"

    }
]

router.get("/coupon_vendors", (req, res) => {

    res.render("coupon_vendors", { title: "Coupon vendors", records })
})



module.exports = router;



