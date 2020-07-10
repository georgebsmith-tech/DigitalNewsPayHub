const router = require("express").Router()
const PostCategory = require("../models/postCategoryModel")
const PostModel = require("../models/postModel")


router.get("/get-categories", async (req, res) => {
    const data = await PostCategory.find().select({ name: 1 })
    // console.log(data)
    res.send(data)
})


router.post("/comments/add/:slug", async (req, res) => {
    console.log(req.body)
    res.send(req.body)
    console.log(req.body)
    const data = await PostModel.findOne({ slug: req.params.slug })
    console.log(data)
    await data.comments.push(req.body)
    await data.save()
    res.send(req.body)

})



module.exports = router