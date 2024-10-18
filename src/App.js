import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components
import WelcomePage from './pages/WelcomePage';
import Comparison from './pages/Comparison';
import CommentCaMarcheee from './pages/CommentCaMarcheee';
import AboutUsPage from './pages/AboutUsPage';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/comparison" element={<Comparison />} /> {/* Comparison route */}
        <Route path="/commentcamarcheee" element={<CommentCaMarcheee />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
