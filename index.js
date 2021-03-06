const express = require("express");
const bodyParser = require('body-parser');
const axios = require('axios');

// const { randomBytes } = require("crypto");
const cors = require('cors');

const app = express();
app.use(express.json());
// app.use(cors());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;
    // console.log('Reicived event', req.body.type);

    events.push(event);

    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:4003/events', event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: 'ok' });
});

app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log("Listening on port 4005")
});
