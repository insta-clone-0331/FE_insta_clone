// src/pages/Home/Home.js
import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../../services/api';
import Post from '../../components/Post/Post';
import Stories from '../../components/Stories/Stories';
import Suggestions from '../../components/Suggestions/Suggestions';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('게시물을 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
    <div className="home">
      <div className="home-feed">
        <Stories />
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="home-sidebar">
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;