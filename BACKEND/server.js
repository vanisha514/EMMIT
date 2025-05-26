// server.js

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const formDataRouter = require('./routes/formData');
const loginRoutes = require('./routes/LoginData');
const registerRoutes = require('./routes/RegisterData');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_LINK)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/formData', formDataRouter);
app.use('/api/LoginData', loginRoutes);
app.use('/api/RegisterData', registerRoutes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
