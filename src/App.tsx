import React, { useState } from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";
import QuestionCard from "./components/QuestionCard";

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

  const startTrivia = async () => {
    setLoading(true);
    setgameOver(false);
    setScore(0);
    setNumber(0);
    const newQuestions = await fetchQuizQuestions(10, Difficulty.EASY);
    setQuestion(newQuestions);
    setuserAnswers([]);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = question[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: question[number].question,
        answer,
        correct,
        correct_answer: question[number].correct_answer,
      };
      setuserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === 10) {
      setgameOver(true);
    } else {
      setNumber(number + 1);
    }
  };
  return (
    <div className="app">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === 10 ? (
        <button className="start" onClick={startTrivia}>
          start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score} </p> : null}
      {loading ? <p>Loading questions... </p> : null}
      {!loading && !gameOver ? (
        <QuestionCard
          totalQuestions={10}
          questionNr={number + 1}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          answers={question[number].answers}
          question={question[number].question}
        />
      ) : null}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== 9 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default App;
