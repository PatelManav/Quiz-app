///// API details in the form of JSON
import { shuffleArray } from "./utils";
import QuestionCard from "./components/QuestionCard";
export type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  category: string;
  type: string;
  difficulty: string;
};

export type QuestionState = Question & { answers: string[] };

// select difficulty of the question
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

// fetch JSON data from the given URL (API)
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

//allah hu akbar chaman bsdk 
// love me manav bb
