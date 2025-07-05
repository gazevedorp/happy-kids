import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PasswordReset from './pages/PasswordReset';
import SignUp from './pages/SignUp';
import ChatLulu from './pages/ChatLulu';
import MyMemos from './pages/MyMemos';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat-lulu" element={<ChatLulu />} />
        <Route path="/mymemos" element={<MyMemos />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
