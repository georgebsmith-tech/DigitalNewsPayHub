const express = require("express");
const { route } = require("./userRoutes");
const router = express.Router()
const PostModel = require("../models/postModel")


const img = "https://res.cloudinary.com/dfm1c1iri/image/upload/v1592415652/image1_fqzvuh.jpg"
router.get("/blog", (req, res) => {
    PostModel.find()
        .then(data => {
            // console.log(osts)

            res.render("blog_home", { title: "BLOG", posts: data, cat_color: "fg-red", show: true, img })
        })
        .catch(err => {
            console.log(err)
        })
    // console.log(ans)



})

router.get("/blog/:id", (req, res) => {

    PostModel.findOne({ _id: req.params.id })
        .then((data) => {
            // console.log(data)
            // res.end()
            res.render("blog_detailed", { title: `${data.category}|${data.title}`, myPost: data, show: true, img })
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



