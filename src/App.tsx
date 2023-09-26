import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Application from '../src/components/pages/Quiz/Application';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Application />} />
        
      </Routes>
    </Router>
  );
};

export default App;
