const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create order
router.post('/', async (req, res) => {
  const { name, item, quantity, price } = req.body;
  const order = new Order({ name, item, quantity, price });
  await order.save();
  res.json({ success: true, order });
});

// Get orders for user or all orders for admin
router.get('/', async (req, res) => {
  if (req.query.name) {
    const orders = await Order.find({ name: req.query.name });
    res.json({ orders });
  } else {
    const orders = await Order.find();
    res.json({ orders });
  }
});

// Update order status (admin)
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json({ success: true, order });
});

module.exports = router;