const mongoose = require("mongoose");
const marked = require("marked");
const creatDompurifier = require("dompurify");

const JSDOM = require("jsdom").JSDOM

const dompurify = creatDompurifier(new JSDOM().window)

// const url = "mongodb://localhost:27017/myPosts"
const url = `mongodb+srv://user1:user1@dnh-yltvr.mongodb.net/posts?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err
    console.log("Connection is successful!!");

})

const Schema = new mongoose.Schema({
    title: String,
    category: String,
    body: String,
    markedBody: String
})

Schema.pre("validate", function (next) {
    if (this.body) {
        this.markedBody = dompurify.sanitize(marked(this.body))

    }
    next()
})

const Post = mongoose.model("Post", Schema)

module.exports = Post;