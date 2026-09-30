// Basic server setup for Travel Planner
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route to check if server is running
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running perfectly' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});