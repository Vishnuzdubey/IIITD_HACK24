const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User.js');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';

// Sign Up Route
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });

  try {
    await user.save();
    res.redirect('/admin/signin');
  } catch (err) {
    res.status(400).send('Error signing up');
  }
});

// Sign In Route
router.get('/signin', (req, res) => {
  res.render('signin');
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Incorrect password');
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 });
  res.redirect('/projects');
});

// Logout Route
router.get('/logout', (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/admin/signin');
});

module.exports = router;
