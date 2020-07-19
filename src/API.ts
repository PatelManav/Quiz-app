///// API details in the form of JSON
export type Question = {
  correct_answer: string
  incorrect_answers: string[]
  question: string
  category: string
  type: string
  difficulty: string
}

// select difficulty of the question
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

// fetch JSON data from the given URL (API)
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = 'https://opentdb.com/api.php?amount=${amount}'
  const data = await (await fetch(endpoint)).json()
  console.log(data)
}
