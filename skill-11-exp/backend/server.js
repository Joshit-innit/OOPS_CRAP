import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import feedbackRoutes from "./routes/feedbackRoutes.js";

// Load .env from this file's directory regardless of where node is executed
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/feedback", feedbackRoutes);

// Connect MongoDB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error(" MONGO_URI is not set. Please define it in your .env file.");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log(" MongoDB Connected");
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch((err) => console.log(" DB Error:", err));