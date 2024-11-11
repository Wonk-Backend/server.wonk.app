const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const queryRoutes = require('./routes/query');
const loginRoutes = require('./routes/login');

// Use routes
app.use('/query', queryRoutes);
app.use('/login', loginRoutes);

// Example of adding another route for additional server functions
app.get('/another-function', (req, res) => {
    res.send('This is another server function');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});