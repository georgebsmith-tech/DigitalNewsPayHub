const AdminModel = require("../models/adminModel")
const bcrypt = require("bcrypt")
const { func } = require("joi")
let salt
async function generateSalt() {
    salt = await bcrypt.genSalt(10)
    console.log(salt)
}

generateSalt()


const router = require("express").Router()

router.get("/admins/login", (req, res) => {
    res.render("admin", { title: "Admin Panel" })
})

router.post("/admins/login", async (req, res) => {
    const data = await AdminModel.findOne({ username: req.body.name })
    if (data) {

        const isTrue = await bcrypt.compare(req.body.password, data.password)
        console.log(isTrue)


        console.log("Gotten data is " + data)
        if (data.password === req.body.password) {
            console.log(data)
            res.render("admin_posts_dashboard", { title: "Admin Panel" })
        } else {
            console.log("Invalid username or  password")
        }
    } else {
        console.log("Invalid username or  password")
    }



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