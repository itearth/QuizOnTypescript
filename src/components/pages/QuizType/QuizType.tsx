import React, { useState } from 'react';
import styles from './QuizType.module.css'; 
import Navbar from '../../generics/Navbar/Navbar';

function QuizType() {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);

  const handleQuizSelection = (quizType: string) => {
    setSelectedQuiz(quizType);
  };

  return (
    <div>
      <Navbar />
    <div className={styles['quiz-selection-page']}>
      <h1>Select the Type of Quiz to Play</h1>
      <div className={styles['quiz-question']}>
        {selectedQuiz ? (
          <p>You have selected: {selectedQuiz} Quiz</p>
        ) : (
          <p>Please select a quiz type:</p>
        )}
      </div>
      <div className={styles['quiz-buttons']}>
      <button
          className={styles['button']} // Apply the button styles
          onClick={() => handleQuizSelection('Math')}
        >
          Math Quiz
        </button>
        <button
          className={styles['button']} // Apply the button styles
          onClick={() => handleQuizSelection('Science')}
        >
          Science Quiz
        </button>
        <button
          className={styles['button']} // Apply the button styles
          onClick={() => handleQuizSelection('History')}
        >
          History Quiz
        </button>
        <button
          className={styles['button']} // Apply the button styles
          onClick={() => handleQuizSelection('Geography')}
        >
          Geography Quiz
        </button>

      </div>
    </div>
    </div>
  );
}

export default QuizType;
