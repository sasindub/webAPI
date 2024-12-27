const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Simple Web API!');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
