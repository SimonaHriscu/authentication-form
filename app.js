const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
app.use(morgan('dev'));
require('dotenv').config();
// to process the json data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// mongoDB
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log('DB is connected'))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

app.use(express.json());
// Serving Static Files
app.use(express.static(path.join(__dirname, './client/build')));

//Routes
const userControllers = require('./controllers/userControllers');
app
  .get('/account/register', userControllers.getAllUsers)
  .post('/account/register', userControllers.registerUser);
app.post('/account/login', userControllers.login);

//send react application
app.get('/', function (req, res) {
  const index = path.join(__dirname, './client/build', 'index.html');
  res.sendFile(index);
});
module.exports = app;
