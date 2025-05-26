// controllers/formDataController.js

const FormData = require("../models/FormData");

// Controller function to submit form data
const submitFormData = async (req, res) => {
  try {
    const {
      eventName,
      eventType,
      eventTheme1,
      eventTheme2,
      eventMode,
      eventDate,
      eventDescription,
      eventRules,
      eventHostName,
      eventHostEmail,
      eventRegistrationCost,
      link
    } = req.body;

    const newFormData = new FormData({
      eventName,
      eventType,
      eventTheme1,
      eventTheme2,
      eventMode,
      eventDate,
      eventDescription,
      eventRules,
      eventHostName,
      eventHostEmail,
      eventRegistrationCost,
      link
    });
    await newFormData.save();
    res.status(201).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller function to get all form data
const getAllFormData = async (req, res) => {
  try {
    const formData = await FormData.find(); // Ensure it's fetching the full data, including 'link'
    res.json(formData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// Get only hackathon events
const getHackathonEvents = async (req, res) => {
  try {
    const hackathons = await FormData.find({ eventType: "Hackathon" });
    res.json(hackathons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get only non-hackathon events
const getGeneralEvents = async (req, res) => {
  try {
    const events = await FormData.find({ eventType: { $ne: "Hackathon" } });
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  submitFormData,
  getAllFormData,
  getHackathonEvents,
  getGeneralEvents
};


// module.exports = { submitFormData, getAllFormData };
