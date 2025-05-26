// routes/formData.js

const express = require('express');
const router = express.Router();
const formDataController = require('../controllers/formDataController');

// Route to handle form data submission
router.post('/', formDataController.submitFormData);

// Route to get all form data
router.get('/', formDataController.getAllFormData);
router.get('/hackathons', formDataController.getHackathonEvents);
router.get('/events', formDataController.getGeneralEvents);


module.exports = router;
