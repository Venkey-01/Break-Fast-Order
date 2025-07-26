const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const { name, mobile, role } = req.body;
  const user = new User({ name, mobile, role });
  await user.save();
  res.json({ success: true });
});

router.post('/login', async (req, res) => {
  const { name, mobile, role } = req.body;
  const user = await User.findOne({ name, mobile, role });
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;