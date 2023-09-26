// Result.tsx
import React from 'react';
import { QuizState } from '../../../types/types';

interface Props {
  quizState: QuizState | null;
  onRestart: () => void;
}

const Result: React.FC<Props> = ({ quizState, onRestart }) => {
  if (!quizState) return null;

  const { score, userAnswers, questions } = quizState;

  const calculatePercentage = (score: number, totalQuestions: number) => {
    return ((score / totalQuestions) * 100).toFixed(2);
  };

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your score: {score}</p>
      <p>Percentage: {calculatePercentage(score, questions.length)}%</p>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            Question {index + 1}: {userAnswers[index] === question.correct_answer ? 'Correct' : 'Incorrect'}
          </li>
        ))}
      </ul>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
