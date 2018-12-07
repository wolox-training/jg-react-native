import api from '@config/api';

export default {
  auth: (username, password) => api.get(`/auth?username=${username}&password=${password}`)
};
