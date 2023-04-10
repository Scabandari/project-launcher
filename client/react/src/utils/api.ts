import axios from 'axios';

const apiBaseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export default axiosInstance;
