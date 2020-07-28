const express = require("express");
const router = express.Router()
const PostCategory = require("../models/postCategoryModel")


router.get("/privacy", async (req, res) => {
    let post;
    const categories = await PostCategory.find()

    res.render("privacy", { title: "How it works", post, categories })
})


module.exports = router;



