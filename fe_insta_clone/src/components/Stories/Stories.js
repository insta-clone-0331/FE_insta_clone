// src/components/Stories/Stories.js
import React from 'react';
import './Stories.css';

const Stories = () => {
  // 샘플 스토리 데이터
  const stories = [
    { id: 1, username: 'user1', profileImg: 'https://via.placeholder.com/32' },
    { id: 2, username: 'user2', profileImg: 'https://via.placeholder.com/32' },
    { id: 3, username: 'user3', profileImg: 'https://via.placeholder.com/32' },
    { id: 4, username: 'user4', profileImg: 'https://via.placeholder.com/32' },
    { id: 5, username: 'user5', profileImg: 'https://via.placeholder.com/32' }
  ];

  return (
    <div className="stories-container">
      {stories.map(story => (
        <div key={story.id} className="story-item">
          <div className="story-avatar">
            <img src={story.profileImg} alt={story.username} />
          </div>
          <div className="story-username">{story.username}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;