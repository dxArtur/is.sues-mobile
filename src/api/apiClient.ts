import axios from 'axios';

const api = axios.create({
  baseURL: 'https://is-sues-omega.vercel.app/api',
});

export default api;