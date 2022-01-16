const express = require('express')
const router = express.Router();
const Event = require('../models/Event');

router.patch('/:eventId', async (req, res) => {
    try {
        const updatedEvent = await Event.updateOne({_id: req.params.eventId}, { $set: {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            imageUrl: req.body.imageUrl
        }});
        res.json({message: "Event has been successfully updated"})
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;