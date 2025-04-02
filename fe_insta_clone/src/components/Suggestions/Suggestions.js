// src/components/Suggestions/Suggestions.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Suggestions.css';

const Suggestions = () => {
  // 샘플 추천 사용자 데이터
  const suggestions = [
    { id: 1, username: 'user1', profileImg: 'https://via.placeholder.com/32', text: '회원님을 위한 추천' },
    { id: 2, username: 'user2', profileImg: 'https://via.placeholder.com/32', text: '인기 계정' },
    { id: 3, username: 'user3', profileImg: 'https://via.placeholder.com/32', text: '새 사용자' },
    { id: 4, username: 'user4', profileImg: 'https://via.placeholder.com/32', text: '회원님을 팔로우합니다' },
    { id: 5, username: 'user5', profileImg: 'https://via.placeholder.com/32', text: '인기 계정' }
  ];

  return (
    <div className="suggestions-container">
      <div className="suggestions-header">
        <span>회원님을 위한 추천</span>
        <span className="see-all">모두 보기</span>
      </div>
      
      <div className="suggestions-list">
        {suggestions.map(user => (
          <div key={user.id} className="suggestion-item">
            <div className="suggestion-user">
              <img src={user.profileImg} alt={user.username} />
              <div className="suggestion-info">
                <Link to={`/profile/${user.username}`}>{user.username}</Link>
                <span className="suggestion-text">{user.text}</span>
              </div>
            </div>
            <button className="follow-button">팔로우</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;