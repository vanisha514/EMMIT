// models/FormData.js

const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    eventName: String,
    eventType: String,
    eventTheme1: String,
    eventTheme2: String,
    eventMode: String,
    eventDate: String,
    eventDescription: String,
    eventRules: String,
    eventHostName: String,
    eventHostEmail: String,
    eventRegistrationCost: String,
    link: String

});

const FormData = mongoose.model('FormData', FormDataSchema);

module.exports = FormData;
