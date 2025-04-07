// src/components/Header/Header.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FaHome, FaCompass, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo"><img src='.\etc\instagramm.png' /></Link>
        
        <div className="search-box">
          <input type="text" placeholder="검색" />
        </div>
        
        <nav className="nav-icons">
          {currentUser ? (
            <>
              <Link to="/" title="홈"><FaHome /></Link>
              <Link to="/explore" title="탐색"><FaCompass /></Link>
              <button className="icon-btn" title="새 게시물"><FaPlusSquare /></button>
              <button className="icon-btn" title="활동"><FaHeart /></button>
              <Link to={`/profile/${currentUser.displayName}`} title="프로필">
                <FaUser />
              </Link>
            </>
          ) : (
            <div className="auth-buttons">
              <button onClick={() => navigate('/login')} className="login-btn">로그인</button>
              <button onClick={() => navigate('/register')} className="register-btn">가입하기</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
