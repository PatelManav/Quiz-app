import React, { useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)
  const [question, setQuestion] = useState([])
  const [userAnswers, setuserAnswers] = useState([])
  const [loading, setLoading] = useState(false)
  const [gameOver, setgameOver] = useState(true)
  const [score, setScore] = useState(0)
  const startTrivia = () => {}
  const checkAnswer = () => {}
  const nextQuestion = () => {}
  return (
    <div className='app'>
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}>
        start
      </button>
      <p className='score'>Score: </p>
      <p>Loading questions... </p>
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default App
