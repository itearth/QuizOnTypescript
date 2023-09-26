import React, { useState } from 'react';
import { Question } from '../../../types/types';
import styles from './QuestionCard.module.css';

interface Props {
  question: Question;
  onNext: (userAnswer: string) => void;
}

const QuestionCard: React.FC<Props> = ({ question, onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer); // Set the selected answer
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
            className={`${styles['answer-button']} ${selectedAnswer === answer ? styles['incorrect-answer-button'] : ''}`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </button>
        ))}
        <button
          className={`${styles['answer-button']} ${selectedAnswer === question.correct_answer ? styles['correct-answer-button'] : ''}`}
          onClick={() => handleAnswerClick(question.correct_answer)}
        >
          {question.correct_answer}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
