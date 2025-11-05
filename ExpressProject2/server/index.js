
export default App;


const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to React with Express framework session" });
});

// Start Server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});