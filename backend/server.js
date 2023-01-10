var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var login = require('./login');

mongoose.set('strictQuery', false);

mongoose
  .connect('YOUR MONGO DB CONNECTION STRING PAST HERE')
  .then((x) => {
    console.log(`MongoDB Connected Successfully!`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  });

app = express();

app.use(cors());

app.get('/', function (req, res) {
    res.send('Access Denied!');
 });

app.use(bodyParser.json());

app.use('/login',login);

var Port = 8081;

var server = app.listen(8081);
