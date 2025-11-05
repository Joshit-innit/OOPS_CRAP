// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    age: { type: Number, min: 0 },
    course: { type: String, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);