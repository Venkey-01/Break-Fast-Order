const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});
module.exports = mongoose.model('User', UserSchema);