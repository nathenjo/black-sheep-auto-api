const express = require('express')
const router = express.Router();
const User = require('../models/Users');

router.post('/', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin
    });

    user.save()
    .then(data => {
        res.json({message: "User has been submitted"})
    })
    .catch(error => {
        res.json({message: error})
    })
})

module.exports = router;