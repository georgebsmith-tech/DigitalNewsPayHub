const AdminModel = require("../models/adminModel")
const bcrypt = require("bcrypt")
const { func } = require("joi")
const passport = require("passport")
const PostModel = require("../models/postModel")

const creatDompurifier = require("dompurify");
const JSDOM = require("jsdom").JSDOM
const dompurify = creatDompurifier(new JSDOM().window)
const marked = require("marked");

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/admins/login")
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/admins/posts_dashboard")
        return
    }
    next()
}


const router = require("express").Router()

router.get("/admins/login", checkNotAuthenticated, (req, res) => {
    let post;
    res.render("admin", { title: "Admin Panel", post })
})

router.post("/admins/login", passport.authenticate("local", {
    successRedirect: "/admins/posts_dashboard",
    failureRedirect: "/admins/login",
    failureFlash: true

}))

router.delete("/admins/logout", (req, res) => {
    req.logOut()
    res.redirect("/admins/login")
})
// const data = await AdminModel.findOne({ username: req.body.name })




router.get("/admins/posts_dashboard", checkAuthenticated, (req, res) => {
    let post;
    res.render("admin_posts_dashboard", { title: "Admin Posst Dashboard", post })
})

router.get("/admins/all-posts", /*checkAuthenticated,*/ async (req, res) => {
    const allData = await PostModel.find()
        .sort({ date: -1 })
    let post;
    res.render("admin-all-posts", { title: "Admin Posst Dashboard-All Post", post, posts: allData })
})

router.get("/admins/edit-post/:slug", /*checkAuthenticated,*/ async (req, res) => {
    try {
        const data = await PostModel.findOne({ slug: req.params.slug })
            .select({ title: 1, category: 1, markedBody: 1, image_url: 1, slug: 1 })
        let post;
        res.render("admin-edit-post", { title: `Admin Posst Dashboard-Edit Post-${data.title}`, post, data })

    } catch (e) {
        throw e
    }

})

router.get("/admins/preview-post/:slug", /*checkAuthenticated,*/ async (req, res) => {
    // PostModel.findOne({ slug: req.params.slug })
    // .then((data) => {
    //     res.render("news_detailed", { title: `${data.title}`, post: data })
    // })

    // console.log(req)
    console.log("Done!!")
    res.render("admin-post-preview")

})





router.put("/admins/update_post/:slug", (req, res) => {
    const result = req.body;
    PostModel.findOneAndUpdate({ slug: req.params.slug }, result, { new: true })
        .then(data => {
            console.log(data)
            res.redirect("/admins/all-posts")
        })
        .catch(err => {
            console.log(err)
        })

})




router.get("/admins/charts", checkAuthenticated, async function (req, res) {
    const allData = await PostModel.find()


    let post;
    res.render("general_charts", { post, title: "-Admin-Charts", posts: allData })
})

module.exports = router