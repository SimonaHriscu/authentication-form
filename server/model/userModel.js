const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let validateEmail = function (email) {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  userName: {
    type: String,
    required: 'UserName is required',
    unique: true,
    trim: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
    min: 5,
    max: 50,
  },
  password: {
    type: String,
    required: 'Password is required',
    trim: true,
    min: 5,
    max: 50,
  },
  role: String,
  avatar: String,
});
const User = mongoose.model('User', userSchema);

module.exports = User;
