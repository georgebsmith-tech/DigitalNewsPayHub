const mongoose = require("mongoose");





const url = `mongodb+srv://digitalnews:digitalnews@cluster0-kyup2.mongodb.net/newsPosts?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(data => {
        console.log("Connection is successful!!")
    })
    .catch(err => {
        throw err
    })


const Schema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    coupon: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    ,
    used: {
        type: Boolean, default: false
    }
})

// Schema.pre("validate", async function (next) {
//     if (this.isNew) {
//         const data = await Coupon.find().sort({ id: -1 }).limit(1).select("id")
//         console.log(data)
//         this.id = data.length === 0 ? 1 : data[0].id + 1
//     }
//     // console.log(this.isNew)


//     next()
// })

// const Post = mongoose.model("post", Schema)

const Coupon = mongoose.model("Coupon", Schema)


module.exports = Coupon;