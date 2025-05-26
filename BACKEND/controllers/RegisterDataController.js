// controllers/RegisterDataController.js
const RegisterData = require('../models/RegisterData');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { name, email, password, repeatPassword } = req.body;

  try {
    if (password !== repeatPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existingUser = await RegisterData.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new RegisterData({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

module.exports = {
  registerUser
};
