import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Application from './components/pages/Quiz/Application';
import HomePage from './components/pages/HomePage/HomePage';
import './App.css';

const App: React.FC = () => {
  return (
    
      <Routes>  
      <Route path="/" element={<HomePage />} />
      <Route path="/application" element={<Application />} /> 
      </Routes>
   
  );
};

export default App;
