import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    const newState = { ...state };
    if (feedbackType in newState) {
      newState[feedbackType] = state[feedbackType] + 1;
      setState(newState);
    }
  };

  return (
    <>
      <Description />
      <Options callback={updateFeedback} />
      <Feedback good={state.good} bad={state.bad} neutral={state.neutral} />
    </>
  );
}

export default App;
