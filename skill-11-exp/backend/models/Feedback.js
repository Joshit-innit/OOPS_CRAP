import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);