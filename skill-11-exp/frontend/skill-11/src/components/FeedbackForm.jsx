import { useState } from "react";
import axios from "axios";

const FeedbackForm = ({ onSubmitSuccess }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !comment.trim()) {
      setError("Both name and comment are required.");
      return;
    }
    try {
      setSubmitting(true);
      await axios.post("/api/feedback", { name, comment });
      setName("");
      setComment("");
      onSubmitSuccess?.();
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={submitting}
      />
      <textarea
        placeholder="Your comment"
        rows={3}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        disabled={submitting}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FeedbackForm;