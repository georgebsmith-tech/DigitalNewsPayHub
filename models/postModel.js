const mongoose = require("mongoose");
const marked = require("marked");
const creatDompurifier = require("dompurify");

const JSDOM = require("jsdom").JSDOM

const dompurify = creatDompurifier(new JSDOM().window)

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
    title: String,
    category: String,
    Story_Image: Buffer,
    body: String,
    markedBody: String,
    image_url: String,
    number_of_views: Number,

})

Schema.pre("validate", function (next) {
    if (this.body) {
        this.markedBody = dompurify.sanitize(marked(this.body))

    }
    next()
})

const Post = mongoose.model("post", Schema)

module.exports = Post;