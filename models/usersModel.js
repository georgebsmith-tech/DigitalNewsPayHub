const mongoose = require("mongoose");
const Joi = require("joi")
const bcrypt = require("bcrypt")


// const url = "mongodb://localhost:27017/myPosts"
const url = `mongodb+srv://digitalnews:digitalnews@cluster0-kyup2.mongodb.net/newsPosts?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(data => {
        console.log("Connection is successful!!")
    })
    .catch(err => {
        throw err
    })


const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true
    },
    first_name: {
        type: String,
        required: true,
        maxlength: 255
    },
    last_name: {
        type: String,
        required: true,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024,
        unique: true
    }
    ,
    phone: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 11,
        unique: true
    },
    ref_username: {
        type: String,
        maxlength: 255
    },
    refs: {
        type: Array
    }

})

Schema.pre("save", async function (next) {
    try {
        // const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.password, 10)
        this.password = hash
        next()

    } catch (err) {
        next(err)
    }
})


const User = mongoose.model("User", Schema)


module.exports = User;