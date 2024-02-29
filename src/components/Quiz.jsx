import { useState, useCallback } from "react";

import Question from "./Question";

// DUMMY RAW DATA (CONSTANT)
import QUESTIONS from "../question";
import quizIsCompleteImg from "../assets/quiz-complete.png";

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
    return (
      <div id="summary">
        <img src={quizIsCompleteImg} alt="Thropy icon" />
        <h2>Quiz is completed</h2>
      </div>
    );
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
