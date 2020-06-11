const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})



const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("App now running on port " + PORT)
})