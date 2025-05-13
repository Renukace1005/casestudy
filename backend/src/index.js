const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


