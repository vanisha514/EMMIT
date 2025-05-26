const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/RegisterDataController');

// Route to handle user registration
router.post('/', registerUser);

module.exports = router;
