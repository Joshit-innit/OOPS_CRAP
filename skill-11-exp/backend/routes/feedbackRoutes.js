import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// POST: Add feedback
router.post("/", async (req, res) => {
  try {
    const { name, comment } = req.body;
    if (!name || !comment)
      return res.status(400).json({ message: "All fields are required" });

    const newFeedback = new Feedback({ name, comment });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: Get all feedback
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;