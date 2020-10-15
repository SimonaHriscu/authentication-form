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
  .connect(
    'mongodb+srv://simo:NzDv9m1UacOtHKhs@cluster0.wx3du.mongodb.net/authentication?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
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
  .get('/register', userControllers.getAllUsers)
  .post('/register', userControllers.registerUser);
app.post('/login', userControllers.login);

//send react application
app.get('/', function (req, res) {
  const index = path.join(__dirname, './client/build', 'index.html');
  res.sendFile(index);
});
module.exports = app;
