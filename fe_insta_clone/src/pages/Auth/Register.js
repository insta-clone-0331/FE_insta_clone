// src/pages/Auth/Register.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(formData);
      localStorage.setItem('authToken', data.token);
      setCurrentUser(data.user);
      navigate('/');
    } catch (err) {
      setError('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-logo">Instagram Clone</h1>
        <p className="auth-subtitle">친구들의 사진과 동영상을 보려면 가입하세요.</p>
        
        {error && <p className="auth-error">{error}</p>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            name="email"
            placeholder="이메일 주소"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="성명"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="사용자 이름"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-button">가입</button>
        </form>
        
        <p className="auth-redirect">
          계정이 있으신가요? <span onClick={() => navigate('/login')}>로그인</span>
        </p>
      </div>
    </div>
  );
};

export default Register;