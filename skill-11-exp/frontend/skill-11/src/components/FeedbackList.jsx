const FeedbackList = ({ feedbacks }) => {
    return (
      <div style={{ marginTop: "10px" }}>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          feedbacks.map((fb) => (
            <div
              key={fb._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                background: "#fff",
              }}
            >
              <p>
                <strong>{fb.name}</strong> says:
              </p>
              <p>{fb.comment}</p>
              <small>{new Date(fb.createdAt).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default FeedbackList;