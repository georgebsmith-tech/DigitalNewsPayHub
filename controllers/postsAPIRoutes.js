const router = require("express").Router()
const PostCategory = require("../models/postCategoryModel")


router.get("/get-categories", async (req, res) => {
    const data = await PostCategory.find().select({ name: 1 })
    // console.log(data)
    res.send(data)
})



module.exports = router