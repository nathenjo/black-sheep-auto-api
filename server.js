const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

const eventsRoutes = require('./routes/get');
const addEventRoute = require('./routes/post');
const deleteRoute = require('./routes/delete');
const updateRoute = require('./routes/update');

app.use('/events', eventsRoutes);
app.use('/events', addEventRoute);
app.use('/events', deleteRoute);
app.use('/events', updateRoute);

app.get('/', (req, res) => {
    res.send('Server is running on Home')
})

mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to Database'))

app.listen(5050);