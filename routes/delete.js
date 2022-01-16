const express = require('express')
const router = express.Router();
const Event = require('../models/Event');

router.delete('/:eventId', async (req, res) => {
    try {
        const deletedEvent = await Event.deleteOne({_id: req.params.eventId})
        res.json({message: "Event has been successfully deleted"})
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;