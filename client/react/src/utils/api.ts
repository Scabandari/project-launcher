import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export default axiosInstance;
