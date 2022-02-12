const express = require('express')
const router = express.Router();
const User = require('../models/Users');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({message: error})
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user)
    } catch (error) {
        res.json({message: error})
    }
});

module.exports = router;