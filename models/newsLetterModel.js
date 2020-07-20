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

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subscriptionDate: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }

})

Schema.pre("validate", function (next) {
    if (this.name) {
        this.name = this.name[0].toUpperCase() + this.name.substr(1).toLowerCase()
    }
    next()
})



const Subscription = mongoose.model("Subscription", Schema)

module.exports = Subscription;