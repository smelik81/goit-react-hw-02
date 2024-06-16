import { useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const feedBackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedBack, setFeedBack] = useState(0);
  /* const [isOpen, setIsOpen] = useState(false);

  const updateReset(() => {
    setIsOpen(!isOpen);
  }) */

  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
}

export default App;
