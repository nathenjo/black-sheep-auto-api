const express = require('express')
const router = express.Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.json({message: error})
    }
});

router.get('/:eventId', async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        res.json(event)
    } catch (error) {
        res.json({message: error})
    }
});

module.exports = router;