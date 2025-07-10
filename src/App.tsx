import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import PasswordReset from './pages/PasswordReset';
import SignUp from './pages/SignUp';
import ChatLulu from './pages/ChatLulu';
import MyMemos from './pages/MyMemos';
import ChatMemory from './pages/ChatMemory';
import EmotionsCards from './pages/EmotionsCards';
import AtlasEmotions from './pages/AtlasEmotions';
import AtlasEmotionsExplain from './pages/AtlasEmotionsExplain';
import AtlasEmotionsInfo from './pages/AtlasEmotionsInfo';
import SurpriseMe from './pages/SurpriseMe';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path="/signup" element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          } />
          <Route path="/password-reset" element={<PasswordReset />} />
          
          {/* Rotas protegidas */}
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/chat-lulu" element={
            <ProtectedRoute>
              <ChatLulu />
            </ProtectedRoute>
          } />
          <Route path="/mymemos" element={
            <ProtectedRoute>
              <MyMemos />
            </ProtectedRoute>
          } />
          <Route path="/chat-history" element={
            <ProtectedRoute>
              <ChatMemory />
            </ProtectedRoute>
          } />
          <Route path="/atlas" element={
            <ProtectedRoute>
              <EmotionsCards />
            </ProtectedRoute>
          } />
          <Route path="/atlas-emotion/:emotion" element={
            <ProtectedRoute>
              <AtlasEmotions />
            </ProtectedRoute>
          } />
          <Route path="/atlas-emotion-explain/:emotion" element={
            <ProtectedRoute>
              <AtlasEmotionsExplain />
            </ProtectedRoute>
          } />
          <Route path="/atlas-emotion-info/:emotion" element={
            <ProtectedRoute>
              <AtlasEmotionsInfo />
            </ProtectedRoute>
          } />
          <Route path="/surprise-me" element={
            <ProtectedRoute>
              <SurpriseMe />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
