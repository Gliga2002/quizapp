import { useState, useCallback } from "react";

import Question from "./Question";
import Summary from "./Summary";

// DUMMY RAW DATA (CONSTANT)
import QUESTIONS from "../question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // computed value
  const activeQuestionIndex = userAnswers.length;
  // computed value
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
