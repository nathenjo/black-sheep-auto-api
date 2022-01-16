const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        default: "https://www.eustis.org/files/assets/public/events-amp-tourism/images/car-shows/classic-car-show.2.jpg?w=1200"
    },
    date: {
        type: Date
    }
})

module.exports = mongoose.model('Events', EventSchema);