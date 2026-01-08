import { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";

function App() {
  const [good, setGood] = useState(() => {
    return Number(localStorage.getItem("good")) || 0;
  });

  const [neutral, setNeutral] = useState(() => {
    return Number(localStorage.getItem("neutral")) || 0;
  });

  const [bad, setBad] = useState(() => {
    return Number(localStorage.getItem("bad")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("good", good);
    localStorage.setItem("neutral", neutral);
    localStorage.setItem("bad", bad);
  }, [good, neutral, bad]);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const totalFeedback = good + neutral + bad;

  const positiveFeedback = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    localStorage.clear();
  };

  return (
    <div>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <p>No feedback yet</p>
      )}

      <Options
        onGood={increaseGood}
        onNeutral={increaseNeutral}
        onBad={increaseBad}
        total={totalFeedback}
        onReset={resetFeedback}
      />
    </div>
  );
}

export default App;