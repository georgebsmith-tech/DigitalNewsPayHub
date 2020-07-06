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
    number_of_posts: {
        type: Number,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }

})

Schema.pre("validate", function (next) {
    if (this.name) {
        this.name = this.name[0].toUpperCase() + this.name.substr(1).toLowerCase()
    }
})



const Category = mongoose.model("Category", Schema)







module.exports = Category;