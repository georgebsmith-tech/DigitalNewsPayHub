const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/users"

mongoose.connect(url, (err, res) => {
    if (err) throw err
    console.log("Connection is successful!!");

})

const Schema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    phone: String
})

const User = mongoose.model("User", Schema)

module.exports = User;