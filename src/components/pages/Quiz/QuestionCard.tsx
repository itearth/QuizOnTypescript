import React from 'react';
import { Question } from '../../../types/types';
import styles from './QuestionCard.module.css'; // Import the CSS module

interface Props {
  question: Question;
  onNext: (userAnswer: string) => void;
}

const QuestionCard: React.FC<Props> = ({ question, onNext }) => {
  const handleAnswerClick = (answer: string) => {
    onNext(answer);
  };

  return (
    <div className={styles['question-card']}>
      <center>
        <h2 className={styles['question-title']} dangerouslySetInnerHTML={{ __html: question.question }} />
      </center>
      <div>
        {question.incorrect_answers.map((answer, index) => (
          <button
            key={index}
            className={`${styles['answer-button']} ${styles['incorrect-answer-button']}`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </button>
        ))}
        <button
          className={`${styles['answer-button']} ${styles['correct-answer-button']}`}
          onClick={() => handleAnswerClick(question.correct_answer)}
        >
          {question.correct_answer}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
