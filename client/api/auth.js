import axios from 'axios';

const BASE_URL = 'http://localhost:3050';

const login = async (userLogin) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, userLogin );
  if (response.data.token.length>0){
    try {
      const token  = response.data.token;
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      throw new Error('Failed to authenticate');
    }
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export { login, logout, getAuthHeader };