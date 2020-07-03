const mongoose = require("mongoose");
const marked = require("marked");
const creatDompurifier = require("dompurify");
const slugify = require("slugify");
slugify.extend({ '#': 'sharp', '+': "plus", "-": "minus", "*": "times" })

const JSDOM = require("jsdom").JSDOM

const dompurify = creatDompurifier(new JSDOM().window)

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
    title: String,
    category: String,
    Story_Image: Buffer,
    date: { type: Date, default: new Date().toDateString() },
    body: String,
    markedBody: String,
    image_url: String,
    number_of_views: { type: Number, default: 0 },
    number_of_likes: { type: Number, default: 0 },
    comments: [{ body: String, date: Date, by: String, email: String, website: String }],
    slug: {
        type: String,
        required: true,
        unique: true
    }
})

Schema.pre("validate", function (next) {
    if (this.body) {
        this.markedBody = dompurify.sanitize(marked(this.body))

    } else {
        this.markedBody = "Ooopss!!! There is no content to display here!"
    }
    if (this.category) {
        this.category = this.category.toLowerCase();
    }
    if (this.title) {
        this.slug = slugify(this.title, {
            lower: false,
            strict: true,
        })
    }


    next()
})

const Post = mongoose.model("post", Schema)

module.exports = Post;