import express from 'express';
import dotenv from 'dotenv';
import { connectDB, getDBStatus } from './db/db.js';

dotenv.config(); // Load environment variables

const app = express();

// Connect to the database to the system
connectDB();

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Simple Web API!');
});

app.get('/api/hello', (req, res) => {
    const dbStatus = getDBStatus() ? "connected" : "not connected";
    res.json({ message: `Database is ${dbStatus}` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
