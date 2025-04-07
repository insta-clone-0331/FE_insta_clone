// src/services/api.js
import axios from 'axios';

const API_URL = 'http://your-django-api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 - 토큰 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 로그인 함수 추가
export const login = async (username, password) => {
  // 테스트용 임시 로그인 함수 (백엔드가 준비되지 않은 경우)
  // 실제로는 아래의 API 호출 코드를 사용해야 합니다
  console.log('로그인 시도:', username, password);
  
  // 테스트를 위한 간단한 검증 (실제 구현에서는 백엔드 인증을 사용해야 함)
  if (username === 'test' && password === 'test') {
    const mockResponse = {
      token: 'mock-jwt-token',
      user: {
        id: 1,
        username: 'testuser',
        displayName: 'Test User',
        email: 'test@example.com',
        profile_image: 'https://via.placeholder.com/150'
      }
    };
    return mockResponse;
  } else {
    // 인증 실패 시 오류 발생
    throw new Error('Invalid credentials');
  }
  
  // 실제 API 호출 코드 (백엔드 준비 후 사용)
  // const response = await apiClient.post('/api/token/', { username, password });
  // return response.data;
};

// 회원가입 함수 추가
export const register = async (userData) => {
  // 테스트용 임시 회원가입 함수 (백엔드가 준비되지 않은 경우)
  // 실제로는 아래의 API 호출 코드를 사용해야 합니다
  console.log('회원가입 시도:', userData);
  
  // 테스트를 위한 가상 응답
  const mockResponse = {
    token: 'mock-jwt-token',
    user: {
      id: 2,
      username: userData.username,
      displayName: userData.name,
      email: userData.email,
      profile_image: 'https://via.placeholder.com/150'
    }
  };
  return mockResponse;
  
  // 실제 API 호출 코드 (백엔드 준비 후 사용)
  // const response = await apiClient.post('/api/register/', userData);
  // return response.data;
};

export const fetchPosts = async () => {
  // API가 준비되지 않았다면 샘플 데이터 반환
  // 실제 API가 준비되면 이 부분을 주석 처리하고 아래 실제 호출 코드 사용
  return [
    {
      id: 1,
      user: {
        username: 'user1',
        profile_image: './test_img/test_profile_icon1.jpg' //'https://via.placeholder.com/32'
      },
      image: './test_img/test_post_pic1.jpg', /* 'https://via.placeholder.com/614x614' */
      caption: '첫 번째 게시물입니다. #인스타그램 #클론',
      likes_count: 42,
      liked_by_current_user: false,
      comments: [
        { user: { username: 'commenter1' }, text: '멋진 사진이네요!' },
        { user: { username: 'commenter2' }, text: '좋아요 누르고 갑니다~' }
      ]
    },
    {
      id: 2,
      user: {
        username: 'user2',
        profile_image: './test_img/test_profile_icon2.png' // 'https://via.placeholder.com/32'
      },
      image: './test_img/test_post_pic2.jpg', // 'https://via.placeholder.com/614x614'
      caption: '두 번째 게시물입니다. #리액트 #웹개발',
      likes_count: 24,
      liked_by_current_user: true,
      comments: [
        { user: { username: 'commenter3' }, text: '잘 보고 갑니다!' }
      ]
    }
  ];
  
  // 실제 API 호출 코드 (백엔드 준비 후 사용)
  // const response = await apiClient.get('/api/posts/');
  // return response.data;
};

// likePost 함수
export const likePost = async (postId) => {
  // 임시 구현 - 실제로는 API 호출
  console.log(`Post ${postId} liked/unliked`);
  return { success: true };
  
  // 실제 API 호출 코드 (백엔드 준비 후 사용)
  // const response = await apiClient.post(`/api/posts/${postId}/like/`);
  // return response.data;
};

// addComment 함수
export const addComment = async (postId, text) => {
  // 임시 구현 - 실제로는 API 호출
  console.log(`Comment added to post ${postId}: ${text}`);
  return {
    id: Math.floor(Math.random() * 1000),
    user: {
      username: 'current_user'
    },
    text: text
  };
  
  // 실제 API 호출 코드 (백엔드 준비 후 사용)
  // const response = await apiClient.post(`/api/posts/${postId}/comments/`, { text });
  // return response.data;
};

export default apiClient;