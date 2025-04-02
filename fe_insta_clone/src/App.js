// src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header';

// Pages
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Explore from './pages/Explore/Explore';
import NotFound from './pages/NotFound/NotFound';

// Context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main className="main-container">
          <Routes>
            {/* 기본 루트 경로를 홈으로 설정 */}
            <Route path="/" element={<Home />} />
            
            {/* 명시적으로 비어있는 경로도 홈으로 리다이렉트 */}
            <Route path="" element={<Navigate to="/" replace />} />
            
            {/* 기타 라우트 */}
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;