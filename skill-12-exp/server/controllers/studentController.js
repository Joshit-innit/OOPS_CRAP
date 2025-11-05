// controllers/studentController.js
const Student = require('../models/Student');

// GET /api/students - list all
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().lean();
    res.json(students);
  } catch (err) {
    console.error('getStudents error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/students/:id
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).lean();
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    console.error('getStudent error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/students
exports.createStudent = async (req, res) => {
  try {
    const { name, email, age, course } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
    const student = await Student.create({ name, email, age, course });
    res.status(201).json(student);
  } catch (err) {
    console.error('createStudent error:', err);
    if (err.code === 11000) return res.status(409).json({ message: 'Email already exists' });
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT /api/students/:id
exports.updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).lean();
    if (!updated) return res.status(404).json({ message: 'Student not found' });
    res.json(updated);
  } catch (err) {
    console.error('updateStudent error:', err);
    if (err.code === 11000) return res.status(409).json({ message: 'Email already exists' });
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /api/students/:id
exports.deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id).lean();
    if (!deleted) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted' });
  } catch (err) {
    console.error('deleteStudent error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};