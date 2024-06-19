import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const feedBackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedBack, setFeedBack] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedBack');
    return savedFeedback ? JSON.parse(savedFeedback) : feedBackState;
  });

  useEffect(() => {
    window.localStorage.setItem('feedBack', JSON.stringify(feedBack));
  }, [feedBack]);

  function updateFeedback(feedbackType) {
    if (feedbackType === '') {
      setFeedBack(feedBackState);
    } else {
      setFeedBack(previousState => ({
        ...previousState,
        [feedbackType]: previousState[feedbackType] + 1,
      }));
    }
  }

  function updateReset() {
    setFeedBack(feedBackState);
  }
  const totalFeedback = feedBack.good + feedBack.neutral + feedBack.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedBack.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        updateReset={updateReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          good={feedBack.good}
          neutral={feedBack.neutral}
          bad={feedBack.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
