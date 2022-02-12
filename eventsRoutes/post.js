const express = require('express')
const router = express.Router();
const Event = require('../models/Event');

router.post('/', (req, res) => {
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        date: req.body.date,
        location: req.body.location
    });

    event.save()
    .then(data => {
        res.json({message: "Event has been submitted"})
    })
    .catch(error => {
        res.json({message: error})
    })
})

module.exports = router;