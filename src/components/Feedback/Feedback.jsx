export default function Feedback({
  good,
  bad,
  neutral,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {`${positiveFeedback}%`}</p>
    </div>
  );
}
