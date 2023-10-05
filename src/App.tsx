import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Application from './components/pages/Quiz/Application';
import HomePage from './components/pages/HomePage/HomePage';
import './App.css';
import QuizType from './components/pages/QuizType/QuizType';

const App: React.FC = () => {
  return (
    
      <Routes>  
      <Route path="/" element={<HomePage />} />
      <Route path="/application" element={<Application />} /> 
      <Route path="/quiztype" element={<QuizType />} /> 
      </Routes>
   
  );
};

export default App;
