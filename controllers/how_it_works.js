const express = require("express");
const router = express.Router()


router.get("/how_it_works", (req, res) => {

    res.render("how_it_works", { title: "How it works", records })
})



module.exports = router;



