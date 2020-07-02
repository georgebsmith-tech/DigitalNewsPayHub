const express = require("express");
const router = express.Router()
const PostModel = require("../models/postModel")



router.get("/", async (req, res) => {
    const data = await PostModel.findOne()
    const allData = await PostModel.find().sort({ date: -1 })
    // console.log(result)
    // res.end()


    // console.log(osts)
    res.render("index", { title: "BLOG", post: data, posts: allData, cat_color: "fg-red" })
})

router.get("/blogs/:slug", (req, res) => {

    PostModel.findOne({ slug: req.params.slug })
        .then((data) => {
            data.number_of_views += 1
            data.save()
            res.render("news_detailed", { title: `${data.title}`, post: data })
        })


})

router.post("/news/comments/:id", async (req, res) => {
    const data = await PostModel.findOne({ _id: req.params.id })

    console.log(req.body)
    const result = req.body
    const new_comment = {}
    new_comment.body = result.comment
    new_comment.by = result.name
    new_comment.email = result.email
    new_comment.website = result.website
    new_comment.date = new Date().toDateString()
    console.log()

    console.log(new_comment)
    await data.comments.push(new_comment)
    await data.save()
    res.redirect(`/blogs/${data.slug}`)


})



router.get("/index/:category", async (req, res) => {
    try {
        const data = await PostModel.find({ category: req.params.category.toLowerCase() }).sort({ date: -1 })
        if (data === [])
            data = undefined
        let post
        // console.log(data)
        res.render("post_by_category", { posts: data, title: req.params.category, post })
    } catch (err) {
        throw err
    }

})




router.get("/api", async (req, res) => {
    const allData = await PostModel.find()
        .select({ category: 1 })
    res.send(allData)

})



module.exports = router;



