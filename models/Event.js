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
        default: "https://www.eustis.org/files/assets/public/events-amp-tourism/images/car-shows/classic-car-show.2.jpg?w=1200"
    },
    // TODO : mess with date object and calls
    date: {
        type: Date
    }
})

module.exports = mongoose.model('Events', EventSchema);