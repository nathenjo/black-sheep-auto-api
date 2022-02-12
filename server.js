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

const eventsRoutes = require('./eventsRoutes/get');
const addEventRoute = require('./eventsRoutes/post');
const deleteRoute = require('./eventsRoutes/delete');
const updateRoute = require('./eventsRoutes/update');

const postUser = require('./usersRoutes/post');
const getUser = require('./usersRoutes/get');

app.use('/events', eventsRoutes);
app.use('/events', addEventRoute);
app.use('/events', deleteRoute);
app.use('/events', updateRoute);

app.use('/users', postUser);
app.use('/users', getUser);

app.get('/', (req, res) => {
    res.send('Server is running on Home')
})

mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to Database'))

app.listen(5050);