const express = require("express");
const router = express.Router()
const posts = [
    {
        id: "12",
        image: "images/post1.png",
        image_descr: "image of patients",
        category: "Travel",
        title: "Making sense of covid-19",
        date: "23/34/13",
        body: "it is a scam"

    },
    {
        id: "2",
        image: "images/post2.png",
        image_descr: "image of patients",
        category: "Fashion and design",
        title: "The travelling sales man",
        date: "12-june-2020",
        body: "This is the day that i have been waiting for"

    },
    {
        id: "1",
        image: "images/post1.png",
        image_descr: "image of patients",
        category: "food and lifestyle",
        title: "The power of 1hr",
        date: "12-feb-2020",
        body: "Working out in the morning is so reviving. You feel this much energy that spikes up your day..."

    },
    {
        id: "9",
        image: "images/post1.png",
        image_descr: "image of patients",
        category: "programming",
        title: "Going boom with java",
        date: "12-feb-2020",
        body: "Working out in the morning is so reviving. You feel this much energy that spikes up your day..."

    }
]

router.get("/blog", (req, res) => {

    res.render("blog_home", { title: "BLOG", posts, cat_color: "fg-red", show: true })
})

router.get("/blog/:id", (req, res) => {
    let myPost = posts[0];
    posts.forEach(post => {
        if (post.id === req.params.id) {
            myPost = post;
        }
    });
    console.log(myPost)
    console.log(req.url)
    res.render("blog_detailed", { title: `${myPost.category}|${myPost.title}`, myPost, show: true })
})

module.exports = router;



