
import React, { useState, useEffect } from 'react';
import { fetchQuizQuestions } from '../../../services/API/fetchQuizQuestions';
import { QuizState, Question } from '../../../types/types';
import QuestionCard from './QuestionCard';
import Result from './Result'; 
import styles from './Application.module.css'

const Application: React.FC = () => {
  const [quiz, setQuiz] = useState<QuizState | null>(null);

  useEffect(() => {
    const startQuiz = async () => {
      const questions = await fetchQuizQuestions(5, 'medium');
      setQuiz({
        questions,
        currentQuestionIndex: 0,
        userAnswers: [],
        score: 0,
      });
    };

    startQuiz();
  }, []);

  const handleNext = (userAnswer: string) => {
    if (!quiz) return;

    const { questions, currentQuestionIndex, score } = quiz;
    const isCorrect = userAnswer === questions[currentQuestionIndex].correct_answer;

    setQuiz({
      ...quiz,
      currentQuestionIndex: currentQuestionIndex + 1,
      userAnswers: [...quiz.userAnswers, userAnswer],
      score: isCorrect ? score + 1 : score,
    });
  };
  const restartQuiz = () => {
    // Logic to restart the quiz, e.g., reset the state or fetch new questions.
  };

  return (
    <div className={styles['quiz-app']}>
     <center> <h1 className={styles['quiz-title']}>Quiz App</h1> </center>
      {quiz && quiz.currentQuestionIndex < quiz.questions.length ? (
        <QuestionCard
          question={quiz.questions[quiz.currentQuestionIndex]}
          onNext={handleNext}
        />
      ) : (
        <div>
          <h2 className={styles['quiz-completed']}>Quiz Completed!</h2>
          <p>Your score: {quiz?.score}</p>
        </div>
      )}
    </div>
  );
};

export default Application;
