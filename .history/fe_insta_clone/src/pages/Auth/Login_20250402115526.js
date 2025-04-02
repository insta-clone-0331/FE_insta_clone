// src/pages/Auth/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import './Auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem('authToken', data.token);
      setCurrentUser(data.user);
      navigate('/');
    } catch (err) {
      setError('로그인에 실패했습니다. 사용자 이름과 비밀번호를 확인해주세요.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-logo">Instagram Clone</h1>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">로그인</button>
        </form>
        <p className="auth-redirect">
          계정이 없으신가요? <span onClick={() => navigate('/register')}>가입하기</span>
        </p>
      </div>
    </div>
  );
};

export default Login;