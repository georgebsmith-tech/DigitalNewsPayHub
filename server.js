const express = require("express");

const app = express()

app.use(express.static("public"))


app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home", { title: "Home" })
})



const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("App now running on port " + PORT)
})