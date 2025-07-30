import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      onTimeOut();
    }, timeout);
     return () => {
      clearTimeout(timeOut);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const progress = setInterval((prevTimeOut) => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(progress);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
