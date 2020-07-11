const AdminModel = require("../models/adminModel")
const bcrypt = require("bcrypt")
const { func } = require("joi")
const passport = require("passport")
const PostModel = require("../models/postModel")
const PostCategory = require("../models/postCategoryModel")
const CouponModel = require("../models/couponModel")

const voucherCode = require("voucher-code-generator")

const creatDompurifier = require("dompurify");
const JSDOM = require("jsdom").JSDOM
const dompurify = creatDompurifier(new JSDOM().window)
const marked = require("marked");
const Category = require("../models/postCategoryModel")

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

router.get("/admins/login", checkNotAuthenticated, async (req, res) => {
    let post;
    const categories = await PostCategory.find().select({ name: 1 })
    res.render("admin", { title: "Admin Panel", post, categories })
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




router.get("/admins/posts_dashboard", checkAuthenticated, async (req, res) => {
    let post;
    const categories = await PostCategory.find().select({ name: 1 })
    res.render("admin_posts_dashboard", { title: "Admin Posst Dashboard", post, categories })
})

router.post("/admins/add-new-category", checkAuthenticated, (req, res) => {
    console.log(req.body)
    const category = new PostCategory(req.body)
    category.save().then(data => {
        console.log("Data saved!\n" + data)
    })
        .catch(err => console.log(err))


    res.redirect("/admins/posts_dashboard")
})



router.get("/admins/all-posts", checkAuthenticated, async (req, res) => {
    const allData = await PostModel.find()
        .sort({ date: -1 })
    let post;
    res.render("admin-all-posts", { title: "Admin Posst Dashboard-All Post", post, posts: allData })
})

router.get("/admins/edit-post/:slug", checkAuthenticated, async (req, res) => {
    try {
        const data = await PostModel.findOne({ slug: req.params.slug })
            .select({ title: 1, category: 1, markedBody: 1, image_url: 1, slug: 1 })
        let post;
        res.render("admin-edit-post", { title: `Admin Posst Dashboard-Edit Post-${data.title}`, post, data })

    } catch (e) {
        throw e
    }

})

const previewPost = []

router.get("/admins/preview-post", checkAuthenticated, (req, res) => {
    // PostModel.findOne({ slug: req.params.slug })
    // .then((data) => {
    //     res.render("news_detailed", { title: `${data.title}`, post: data })
    // })

    // console.log(req)
    console.log("Done!!")
    // console.log(previewPost[0])
    const resp = previewPost[0]
    previewPost.length = 0
    // resp.url = "None"
    console.log(resp)
    res.render("admin-post-preview", { title: `Post preview|${resp.title}`, post: resp })

})

router.post("/trial", (req, res) => {
    // console.log(req.bodreq.bodyy)
    previewPost.push(req.body)
    console.log(previewPost)

    res.redirect("/admins/all-posts")
    res.end()
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

router.delete("/admins/delete-post/:slug", (req, res) => {
    console.log(req.params.slug)
    PostModel.findOneAndDelete({ slug: req.params.slug })
        .then(data => {

            const category = data
            console.log(category[0].toUpperCase() + category.substr(1).toLowerCase())
            PostCategory.findOneAndUpdate({ name: category[0].toUpperCase() + category.substr(1).toLowerCase() }, { $inc: { number_of_posts: -1 } })
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })

    res.end()
})

router.post("/admins/add_post", (req, res) => {
    const reqBody = req.body
    const category = reqBody.category
    console.log(category[0].toUpperCase() + category.substr(1).toLowerCase())
    PostCategory.findOne({ name: category[0].toUpperCase() + category.substr(1).toLowerCase() })
        .then(data => {
            data.number_of_posts += 1
            data.save()
        })
    const post = new PostModel(reqBody)
    post.save()
    res.redirect("/admins/all-posts")
})




router.get("/admins/charts", checkAuthenticated, async function (req, res) {
    const allData = await PostModel.find()


    let post;
    res.render("general_charts", { post, title: "-Admin-Charts", posts: allData })
})



router.post("/admins/coupons/new", async (req, res) => {
    // console.log(req.body)
    const vouchers = voucherCode.generate({
        count: req.body.number * 1,
        length: 7,
        postfix: "dnp"
    })
    // const data = await CouponModel.find().sort({ id: -1 }).limit(1).select("id")
    // let index = data.length === 0 ? 1 : data[0].id + 1
    vouchers.forEach(async voucher => {
        const theVoucher = {
            coupon: voucher
        }
        let coupon = new CouponModel(theVoucher)
        const data = await CouponModel.find({ coupon: voucher })

        if (!data.length) {
            coupon.save()
                .then(data => {
                    console.log("Voucher saved!!" + data)
                    // index++;
                })
        } else {
            console.log("Record Exists" + data)
        }

    })


    // res.send(vouchers)
    // console.log(req.body)
    res.end("Done!!")
})

router.get("/admins/coupons/new", (req, res) => {
    // console.log(req.body)
    res.send("The is is coupon get")
})

module.exports = router