import { create } from 'apisauce';

import { authHeader } from './header';

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  headers: authHeader()
});

export default api;
