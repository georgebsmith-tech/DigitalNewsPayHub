const express = require("express");
const router = express.Router()
const PostModel = require("../models/postModel")



router.get("/", async (req, res) => {
    const data = await PostModel.findOne()
    const allData = await PostModel.find()
    // console.log(result)
    // res.end()


    // console.log(osts)
    res.render("index", { title: "BLOG", post: data, posts: allData, cat_color: "fg-red" })
    // })
    // .catch(err => {
    //     console.log(err)
    // })

    // res.render("index", { title: "Home" })




})

router.get("/news/:id", (req, res) => {

    PostModel.findOne({ _id: req.params.id })
        .then((data) => {
            data.number_of_views += 1
            data.save()
            res.render("news_detailed", { title: `${data.category}|${data.title}`, post: data })
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
    res.redirect(`/news/${data._id}`)


})

router.post("/admins/add_post", (req, res) => {
    const result = req.body;

    // console.log(result)
    const post = new PostModel(result)
    post.save()
        .then(data => {
            console.log("data saved" + data)
            res.redirect("/")
        })
        .catch(err => {
            throw err
        })
})



module.exports = router;



