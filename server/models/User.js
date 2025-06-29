const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String }, // optional for Google users
  googleId: { type: String },
  role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', userSchema); 