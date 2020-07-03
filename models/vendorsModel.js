const mongoose = require("mongoose");
const Joi = require("joi")



const url = `mongodb+srv://digitalnews:digitalnews@cluster0-kyup2.mongodb.net/newsPosts?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
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
    bank_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    // email: {
    //     type: String,
    //     required: true,
    //     minlength: 5,
    //     maxlength: 255
    // },
    // acct_no: {
    //     type: String,
    //     required: true,
    //     minlength: 10,
    //     maxlength: 10
    // }
    // ,
    phone: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 11
    }

})

// Schema.pre("save", async function (next) {
//     try {
//         // const salt = await bcrypt.genSalt(10)
//         const hash = await bcrypt.hash(this.password, 10)
//         this.password = hash
//         next()

//     } catch (err) {
//         next(err)
//     }
// })



const Vendors = mongoose.model("Vendors", Schema)

// const vendor = new Vendors({
//     name: "smith",
//     phone: "08165335988",
//     bank_name: "GTB"
// })

// vendor.save()


module.exports = Vendors;