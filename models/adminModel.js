const mongoose = require("mongoose");
const Joi = require("joi")

// const url = "mongodb://localhost:27017/myPosts"
const url = `mongodb+srv://digitalnews:digitalnews@cluster0-kyup2.mongodb.net/newsPosts?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(data => {
        console.log("Connection is successful!!")
    })
    .catch(err => {
        throw err
    })


const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
    ,
    phone: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 11
    }

})


const Admin = mongoose.model("Admin", Schema)

module.exports = Admin;