const mongoose = require("mongoose");
const Joi = require("joi")
const bcrypt = require("bcrypt")


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
    username: {
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

// Schema.methods.isValidPassword= async function(password){
//     try{
//         return await bcrypt.compare(password,this.password)

//     }catch(err){
//         throw err
//     }
// }


const Admin = mongoose.model("Admin", Schema)
// const admin = new Admin({
//     username: "booming",
//     password: "booming",
//     email: "booming@gmail.com",
//     phone: "09812767237"
// })

// admin.save()
//     .then(data => {
//         console.log("data saved!!")
//     })

// async function encrypt() {
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(admin.password, salt)
//     admin.password = hashedPassword
//     admin.save()
//         .then(data => {
//             console.log("Data saved!!")
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// encrypt()





module.exports = Admin;