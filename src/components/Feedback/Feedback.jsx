function Feedback({ good, bad, neutral, totalFeedback, updateReset }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {updateReset}</p>
    </div>
  );
}

export default Feedback;
