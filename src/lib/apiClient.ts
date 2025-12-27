import Axios, { InternalAxiosRequestConfig } from 'axios';
import { VIDEO_MNG_PATH } from '../consts/CommonConst';
import ENV from '../env.json';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {

  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;

  return config;
}

export const api = Axios.create({
  baseURL: VIDEO_MNG_PATH,
});

api.interceptors.request.use(authRequestInterceptor);

let isRefreshing = false;
let queue: Array<() => void> = [];

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;

      if (!isRefreshing) {

        isRefreshing = true;

        try {

          await api.post(ENV.REFRESH);

          queue.forEach(cb => cb());
          queue = [];
        } catch {

          // リフレッシュ失敗
          window.location.href = ENV.FRONT_USER_LOGIN;
          return Promise.reject(error);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise(resolve => {
        queue.push(() => resolve(api(originalRequest)));
      });
    }

    return Promise.reject(error);
  },
);