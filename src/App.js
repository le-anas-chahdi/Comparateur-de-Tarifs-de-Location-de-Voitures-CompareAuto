import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components
import WelcomePage from './pages/WelcomePage';
import Comparison from './pages/Comparison';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/comparison" element={<Comparison />} /> {/* Comparison route */}
      </Routes>
    </Router>
  );
};

export default App;
