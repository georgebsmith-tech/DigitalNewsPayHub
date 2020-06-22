const AdminModel = require("../models/adminModel")
const bcrypt = require("bcrypt")

const salt = bcrypt.genSalt(30)

const router = require("express").Router()

router.get("/admins", (req, res) => {
    res.render("admin", { title: "Admin Panel" })
})

router.get("/admins/posts_dashboard", (req, res) => {
    res.render("admin_posts_dashboard", { title: "Admin Posst Dashboard" })
})


// router.post("/admins/add_post", async (req, res) => {


// const body = req.body
// res.end()
// const salt = await bcrypt.genSalt(10)
// const hashedPword = await bcrypt.hash(body.title, salt)
// console.log(salt)
// console.log(body)
// console.log(hashedPword)

// })

module.exports = router