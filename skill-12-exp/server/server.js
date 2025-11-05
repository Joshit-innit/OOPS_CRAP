// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

// Load .env from this file's directory regardless of CWD
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (_req, res) => res.send(' API is running successfully'));

// Mount routes
app.use('/api/students', studentRoutes);

(async () => {
  try {
    const { MONGO_URI, PORT } = process.env;
    if (!MONGO_URI) throw new Error('MONGO_URI is undefined in .env');

    await connectDB(MONGO_URI);

    const port = Number(PORT) || 5000;
    app.listen(port, () => console.log(` Server running on port ${port}`));
  } catch (err) {
    console.error(' Startup error:', err.message);
    process.exit(1);
  }
})();