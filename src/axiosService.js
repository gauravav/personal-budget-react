// axiosService.js or axiosService.ts

import axios from 'axios';

// Create an instance of Axios with custom configurations, if needed
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030', // Set your API base URL here
  timeout: 5000, // Set a timeout for requests (optional)
  // You can also add headers, interceptors, and other custom configuration options here
});

// Define functions for making HTTP requests
export const axiosGet = (url, params) => {
  return axiosInstance.get(url, { params });
};

export const axiosPost = (url, data) => {
  return axiosInstance.post(url, data);
};

export const axiosPut = (url, data) => {
  return axiosInstance.put(url, data);
};

export const axiosDelete = (url) => {
  return axiosInstance.delete(url);
};
