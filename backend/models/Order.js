const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  name: String,
  item: String,
  quantity: Number,
  price: Number,
  status: { type: String, default: 'Pending' }
});
module.exports = mongoose.model('Order', OrderSchema);