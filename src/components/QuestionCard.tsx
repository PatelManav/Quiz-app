import React from "react";

/// defining from the properties of the QuestionCard
type properties = {
  question: string;
  questionNr: number;
  totalQuestions: number;
  answers: string[];
  userAnswer: any;
  callback: any;
};

// custom tag created for the QuestionCard
const QuestionCard: React.FC<properties> = ({
  question,
  questionNr,
  totalQuestions,
  userAnswer,
  answers,
  callback,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions};
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button disabled={userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
