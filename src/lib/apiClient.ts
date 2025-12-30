import { default as Axios, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { VIDEO_MNG_PATH } from '../consts/CommonConst';
import ENV from '../env.json';
import { accessTokenRef, resetAccessToken, resetLogin, updateAccessToken } from './accessTokenStore';

type QueueItem = {
  resolve: (accessToken: string) => void;
  reject: (reason?: any) => void;
};

function authRequestInterceptor(config: InternalAxiosRequestConfig) {

  config.headers = config.headers || {};
  config.headers.Accept = 'application/json';

  if (accessTokenRef) {
    config.headers['Authorization'] = accessTokenRef;
  }

  config.withCredentials = true;

  return config;
}

export const api = Axios.create({
  baseURL: VIDEO_MNG_PATH,
});

const refreshApi = Axios.create({
  baseURL: VIDEO_MNG_PATH,
});

api.interceptors.request.use(authRequestInterceptor);
refreshApi.interceptors.request.use(authRequestInterceptor);

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

      return new Promise(async (resolve, reject) => {

        queue.push({
          resolve: (token) => {

            originalRequest.headers = {
              ...(originalRequest.headers || {}),
              Authorization: token,
            };

            resolve(api(originalRequest));
          },
          reject,
        });

        if (!isRefreshing) {

          isRefreshing = true;

          try {

            // リフレッシュ
            const res = await refreshApi.post(
              ENV.REFRESH,
              {},
              {
                headers: {
                  'X-CSRF-Token': Cookies.get('csrf_token'),
                },
              }
            );

            const newAccessToken = res.data.data;
            updateAccessToken(newAccessToken);

            // 認証エラーになったAPIを再度コール
            queue.forEach(cb => {
              cb.resolve(newAccessToken);
            });

            queue = [];
          } catch (err) {

            // リフレッシュ失敗
            resetAccessToken();
            resetLogin();

            reject(err);
          } finally {
            isRefreshing = false;
          }
        }
      });
    }

    return Promise.reject(error);
  },
);