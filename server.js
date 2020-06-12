const express = require("express");

const app = express()

app.use(express.static("public"))


app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home", { title: "Home" })
})

// const posts = [6, 8, 3, 7]
const posts = [
    {
        image: "images/post1.png",
        image_descr: "image of patients",
        category: "Travel",
        title: "Making sense of covid-19",
        date: "23/34/13",
        body: "it is a scam"

    },
    {
        image: "images/post2.png",
        image_descr: "image of patients",
        category: "Fashion and design",
        title: "The travelling sales man",
        date: "12-june-2020",
        body: "This is the day that i have been waiting for"

    }
]

app.get("/blog", (req, res) => {

    res.render("blog_home", { title: "BLOG", posts, cat_color: "fg-red" })
})



const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("App now running on port " + PORT)
})