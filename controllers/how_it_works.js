const express = require("express");
const router = express.Router()


router.get("/how-it-works", (req, res) => {
    let post;

    res.render("how_it_works", { title: "How it works", post })
})



module.exports = router;



