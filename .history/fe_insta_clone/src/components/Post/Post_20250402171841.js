// src/components/Post/Post.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaRegComment, FaRegPaperPlane } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import { likePost, addComment } from '../../services/api';
import './Post.css';

const Post = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const [liked, setLiked] = useState(post.liked_by_current_user);
  const [likesCount, setLikesCount] = useState(post.likes_count);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleLike = async () => {
    try {
      await likePost(post.id);
      setLiked(!liked);
      setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    } catch (error) {
      console.error('좋아요 처리 중 오류가 발생했습니다:', error);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    try {
      const newComment = await addComment(post.id, comment);
      setComments([...comments, newComment]);
      setComment('');
    } catch (error) {
      console.error('댓글 추가 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <Link to={`/profile/${post.user.username}`} className="post-user">
          <img src={post.user.profile_image} alt={post.user.username} />
          <span>{post.user.username}</span>
        </Link>
      </div>
      
      <div className="post-image">
        <img src={post.image} alt="게시물 이미지" />
      </div>
      
      <div className="post-actions">
        <button onClick={handleLike} className="action-btn">
          {liked ? <FaHeart className="liked" /> : <FaRegHeart />}
        </button>
        <button className="action-btn">
          <FaRegComment />
        </button>
        <button className="action-btn">
          <FaRegPaperPlane />
        </button>
      </div>
      
      <div className="post-likes">
        좋아요 {likesCount}개
      </div>
      
      <div className="post-caption">
        <Link to={`/profile/${post.user.username}`} className="username">
          {post.user.username}
        </Link> {post.caption}
      </div>
      
      <div className="post-comments">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <Link to={`/profile/${comment.user.username}`} className="username">
              {comment.user.username}
            </Link> {comment.text}
          </div>
        ))}
      </div>
      
      {currentUser && (
        <form onSubmit={handleAddComment} className="comment-form">
          <input
            type="text"
            placeholder="댓글 달기..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" disabled={!comment.trim()}>게시</button>
        </form>
      )}
    </div>
  );
};

export default Post;