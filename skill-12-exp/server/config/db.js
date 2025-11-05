// config/db.js
const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri || typeof uri !== 'string' || !uri.trim()) {
    throw new Error('MONGO_URI is missing. Please set it in .env');
  }

  mongoose.set('strictQuery', true);

  const conn = await mongoose.connect(uri);
  console.log(` MongoDB Connected: ${conn.connection.host}`);
}

module.exports = { connectDB };