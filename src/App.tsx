import React, { useState } from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";

type answerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correct_answer: string;
};

const App = () => {
  //--------
  const [number, setNumber] = useState(0);
  const [question, setQuestion] = useState<QuestionState[]>([]);
  const [userAnswers, setuserAnswers] = useState<answerObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [gameOver, setgameOver] = useState(true);
  const [score, setScore] = useState(0);
  //---------

  console.log(fetchQuizQuestions(10, Difficulty.EASY));

  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="app">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        start
      </button>
      <p className="score">Score: </p>
      <p>Loading questions... </p>
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
