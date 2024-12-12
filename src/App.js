import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components
import WelcomePage from './pages/public/WelcomePage';
import Comparison from './pages/public/Comparison';
import CommentCaMarchePage from './pages/public/CommentCaMarchePage';
import AboutUsPage from './pages/public/AboutUsPage';
import ContactPage from './pages/public/ContactPage';
import SignUp from './pages/private/SignUp';
import Auth from './pages/private/Auth';
import Profile from './pages/private/Profile';
import ChangePassword from './pages/private/ChangePassword';
import Jobs from './components/sections/Jobs';
import LegalPage from './pages/public/LegalPage';
import PrivacyPolicyPage from './pages/public/PrivacyPolicyPage';
import Subscriptions from './pages/private/Subscriptions';
import PersonalInfo from './pages/private/PersonalInfo';
import SideBarMenu from './components/layout/SideBarMenu';
import FAQPage from './pages/public/FAQPage'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/comparison" element={<Comparison />} /> {/* Comparison route */}
        <Route path="/commentcamarchepage" element={<CommentCaMarchePage />} />
        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/privacypolicypage" element={<PrivacyPolicyPage />} />
        <Route path="/sidebarmenu" element={<SideBarMenu />} />
        <Route path="/faqpage" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default App;
