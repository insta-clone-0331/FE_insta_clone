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

export const login = async (username, password) => {
  const response = await apiClient.post('/api/token/', { username, password });
  return response.data;
};

export const register = async (userData) => {
  const response = await apiClient.post('/api/register/', userData);
  return response.data;
};

export const fetchPosts = async () => {
  const response = await apiClient.get('/api/posts/');
  return response.data;
};

// 추가 API 함수들...

export default apiClient;