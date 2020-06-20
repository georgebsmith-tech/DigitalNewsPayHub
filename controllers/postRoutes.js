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
            // console.log(data)
            // res.end()
            res.render("news_detailed", { title: `${data.category}|${data.title}`, post: data, img })
        })


})

router.post("/admin/posts/add", (req, res) => {
    const result = req.body;

    // console.log(result)
    const post = new PostModel(result)
    post.save()
        .then(data => {
            console.log("data saved" + data)
            res.redirect("/blog")
        })
        .catch(err => {
            throw err
        })
})

router.get("/admin/posts/add", (req, res) => {
    res.render("add_post", { title: "New post" })
})


module.exports = router;



