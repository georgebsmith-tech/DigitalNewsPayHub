const NewsSubscriptionModel = require("../models/newsLetterModel");


const router = require("express").Router()



router.post("/news-letter", async function (req, res) {
    try {
        console.log(req.body)
        const newSub = new NewsSubscriptionModel(req.body)
        const data = await newSub.save()
        console.log(data)
        res.status(200).send(data)
    } catch (err) {
        res.status(401).send(err)
    }
})


module.exports = router;
