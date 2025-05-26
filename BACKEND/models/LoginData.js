const mongoose = require('mongoose');

const LoginDataSchema = new mongoose.Schema({
  email: String,
  password: String
});

const LoginData = mongoose.model('LoginData', LoginDataSchema);

module.exports = LoginData;