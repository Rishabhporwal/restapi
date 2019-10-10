const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');
const app = express();

//app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

mongoose.connect(
    "mongodb+srv://rishabh:rishabh12345@cluster0-edqhg.mongodb.net/restapi?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}
).then(result => {
    app.listen(8080);
}).catch(err => { console.log(err) })