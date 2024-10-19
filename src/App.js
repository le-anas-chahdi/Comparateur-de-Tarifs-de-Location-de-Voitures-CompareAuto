import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components
import WelcomePage from './pages/MainPages/WelcomePage';
import Comparison from './pages/MainPages/Comparison';
import CommentCaMarchePage from './pages/MainPages/CommentCaMarchePage';
import AboutUsPage from './pages/MainPages/AboutUsPage';
import Contact from './components/Contact';
import SignUp from './pages/usersAccount/SignUp';
import Auth from './pages/usersAccount/Auth';
import Profile from './pages/usersAccount/Profile';
import ChangePassword from './pages/usersAccount/ChangePassword';
import Reservations from './pages/usersAccount/Reservations';

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
