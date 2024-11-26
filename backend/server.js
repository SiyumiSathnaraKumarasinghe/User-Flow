const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (local or Atlas)
mongoose.connect('mongodb+srv://Siyumi:Siyu2000@userflow.icxe0.mongodb.net/?retryWrites=true&w=majority&appName=userFlow')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Example Route (You can change this as needed for your project)
app.get('/', (req, res) => res.send('UserFlow API is running'));

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
