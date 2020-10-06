const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const EMAIL_ALREADY_USED = 'EMAIL_ALREADY_USED';
const INVALID_EMAIL = 'INVALID_EMAIL';
const WRONG_PASSWORD = 'WRONG_PASSWORD';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const registerUser = async (req, res) => {
  const userCheck = await User.findOne(
    {
      userName: req.body.userName,
    },
    { email: req.body.email }
  );

  if (userCheck) {
    return res.status(400).json({ error_code: EMAIL_ALREADY_USED });
  }
  if (req.body.password !== req.body.confPassword) {
    return res.status(404).send('Passwords do not match!');
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      confPassword: hashedPassword,
    });
    newUser.save();
    res.status(201).json({ status: 'Success!', newUser });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ userName: req.body.userName });
  if (!user) {
    return res.status(404).json({ status_code: INVALID_EMAIL });
  }
  try {
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      //comparing the passwords
      res.status(400).json({ status_code: WRONG_PASSWORD });
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        expireDate: getCurrentDateWithAddedHours(2),
      },
      process.env.JWT_SECRET
    );
    res.json({ token: token });
  } catch (err) {
    console.log(err.message),
      res.status(500).json({
        message: err.message,
      });
  }
};

const getCurrentDateWithAddedHours = (hours) => {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + hours);

  return currentDate;
};

module.exports = { getAllUsers, login, registerUser };
