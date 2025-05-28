import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Or your NestJS backend URL
});

export default api;
