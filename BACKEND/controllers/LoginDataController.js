// controllers/LoginDataController.js
const RegisterData = require('../models/RegisterData'); // Changed to RegisterData
const bcrypt = require('bcrypt');

// No need for this function if you're registering separately
// You can remove or comment it out if unused
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await RegisterData.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new RegisterData({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await RegisterData.findOne({ email }); // 👈 Changed to RegisterData
    console.log('Fetched User:', user); // Log the user

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password Match:', isMatch); // Log the comparison result

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

module.exports = {
  registerUser, // Optional if not used
  loginUser
};
