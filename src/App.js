import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components
import WelcomePage from './pages/public/WelcomePage';
import Comparison from './pages/public/Comparison';
import CommentCaMarchePage from './pages/public/CommentCaMarchePage';
import AboutUsPage from './pages/public/AboutUsPage';
import Contact from './components/sections/Contact';
import SignUp from './pages/private/SignUp';
import Auth from './pages/private/Auth';
import Profile from './pages/private/Profile';
import ChangePassword from './pages/private/ChangePassword';
import Reservations from './pages/private/Reservations';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/comparison" element={<Comparison />} /> {/* Comparison route */}
        <Route path="/commentcamarchepage" element={<CommentCaMarchePage />} />
        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
};

export default App;
