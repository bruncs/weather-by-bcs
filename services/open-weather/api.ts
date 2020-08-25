import axios, { AxiosRequestConfig } from 'axios';
import { handleSuccess, handleError } from '../handlers';

const baseURL = process.env.NEXT_PUBLIC_OPEN_WEATHER_BASE_URL;
const appId = process.env.NEXT_PUBLIC_OPEN_WEATHER_APPID;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((configuration: AxiosRequestConfig) => {
  const config = configuration;
  config.params = { ...config.params, appId };
  return config;
});

api.interceptors.response.use(
  (response) => handleSuccess(response),
  (error) => handleError(error),
);

export default api;
