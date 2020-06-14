const express = require("express");
const router = express.Router()

const UserModel = require("../models/usersModel");

router.get("/login", (req, res) => {

    res.render("login", { title: "Login", show: false })
})

router.get("/register", (req, res) => {
    // const user = new UserModel({
    //     userName: "whyte-man",
    //     email: "bomag@blahblabla",
    //     password: "This is it",
    //     phone: "my precious"

    // })

    // user.save((err, doc) => {
    //     if (err) throw err
    //     console.log("Document has been saved successfully\n" + doc)
    // })
    // console.log(req.body)
})

router.post("/register", (req, res) => {

})

router.get("/dashboard", (req, res) => {
    res.render("dashboard", { title: "DashBoard" })
})


module.exports = router;