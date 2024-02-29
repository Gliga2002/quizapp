import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timerId = setTimeout(onTimeout, timeout);

    return () => {
      // treba mi kad componenta unmounts na kraju - summary
      clearInterval(timerId);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      // treba mi zbog stricModa, jer ce dvaput da se izvrsi i brzo ce da se zavrsi, sa ovim ce prethodna da se izbise kad se ova startuje
      clearInterval(intervalId);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

export default QuestionTimer;
