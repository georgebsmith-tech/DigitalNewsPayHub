const express = require("express");
const { route } = require("./userRoutes");
const router = express.Router()
const PostModel = require("../models/postModel")





const posts = [

]
router.get("/blog", (req, res) => {
    PostModel.find()
        .then(data => {
            for (let post of data) {
                post.image = ["images/post1.png", "images/post2.png"][Math.floor(Math.random() * 2)]
                posts.push(post)
            }
            // console.log(osts)
            res.render("blog_home", { title: "BLOG", posts, cat_color: "fg-red", show: true })
        })
        .catch(err => {
            console.log(err)
        })
    // console.log(ans)



})

router.get("/blog/:id", (req, res) => {
    let myPost = posts[0];
    posts.forEach(post => {
        if (post.id === req.params.id) {
            myPost = post;
        }
    });
    console.log(myPost)
    // console.log(postBody)
    console.log(myPost.markedBody)
    console.log(req.url)
    res.render("blog_detailed", { title: `${myPost.category}|${myPost.title}`, myPost, show: true })
})

router.post("/admin/posts/add", (req, res) => {
    const result = req.body;
    // const now = new Date();
    // result.date = now.toDateString()
    console.log(result)
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



