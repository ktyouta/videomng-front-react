import Axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { VIDEO_MNG_PATH } from '../consts/CommonConst';
import ENV from '../env.json';
import { updateAccessToken } from './accessTokenStore';

type QueueItem = {
  resolve: () => void;
  reject: (reason?: any) => void;
};

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
let queue: QueueItem[] = [];

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

          const res = await api.post(
            ENV.REFRESH,
            {},
            {
              headers: {
                'X-CSRF-Token': Cookies.get('csrf_token'),
              },
            }
          );

          updateAccessToken(res.data.accessToken);

          queue.forEach(cb => cb.resolve());
          queue = [];
        } catch {

          // リフレッシュ失敗
          return Promise.reject(error);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve, reject) => {
        queue.push({
          resolve: () => resolve(api(originalRequest)),
          reject,
        });
      });
    }

    return Promise.reject(error);
  },
);