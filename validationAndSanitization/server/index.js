// server/index.js
const express = require("express");
const cors = require("cors");
const validateUserInput = require("./middlewares/validateInput");

// Create app
const app = express();

// ========== MIDDLEWARES ==========
app.use(cors());
app.use(express.json());

// ========== ROUTES ==========

// Test route (GET)
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express Validation Example session" });
});

// Route using validation middleware (POST)
app.post("/api/submit", validateUserInput, (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: ` Hello ${name} Your email (${email}) is valid and sanitized.`,
  });
});

// ========== START SERVER ==========
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});