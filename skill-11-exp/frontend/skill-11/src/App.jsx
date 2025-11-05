import { useEffect, useState } from "react";
import axios from "axios";
import FeedbackForm from "./components/FeedbackForm.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedback = async () => {
    const res = await axios.get("/api/feedback");
    setFeedbacks(res.data);
  };

  useEffect(() => {
    fetchFeedback();
    const interval = setInterval(fetchFeedback, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Feedback Form</h1>
      <FeedbackForm onSubmitSuccess={fetchFeedback} />
      <h2 style={{ marginTop: 30 }}>All Feedback</h2>
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;
