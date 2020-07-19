import React from 'react'
import { promises } from 'dns'

type properties = {
  question: string
  questionNr: number
  totalQuestions: number
  answers: string[]
  userAnswer: any
  callback: any
}

const QuestionCard: React.FC<properties> = ({
  question,
  questionNr,
  totalQuestions,
  userAnswer,
  answers,
  callback
}) => (
  <div>
    <p className='number'>
      Question: {question} / {totalQuestions};
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map(answer => (
        <div>
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
)

export default QuestionCard
