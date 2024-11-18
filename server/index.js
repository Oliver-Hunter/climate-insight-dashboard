const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' folder

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Climate Insight Dashboard Backend');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is the API endpoint for data!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
