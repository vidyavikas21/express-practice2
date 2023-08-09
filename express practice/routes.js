// routes.js

const express = require('express');
const router = express.Router();

const users = [];

// Register a new user
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  const newUser = { username, password };
  users.push(newUser);

  req.session.loggedIn = true;
  req.session.user = newUser;

  res.json({ message: 'Registration successful' });
});

// Login an existing user
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  req.session.loggedIn = true;
  req.session.user = user;

  res.json({ message: 'Login successful' });
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logout successful' });
  });
});

// Dashboard route (protected)
router.get('/dashboard', (req, res) => {
  if (!req.session.loggedIn || !req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = req.session.user;
  res.json({ message: `Welcome to your dashboard, ${user.username}` });
});

module.exports = router;
