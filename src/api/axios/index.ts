import axios from 'axios';
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { axiosConfig } from '@src/api/axios/config';
import { ACCESS_TOKEN } from '@src/utils/storage/variables';
import { storage } from '@src/utils/storage';
import { ResponseStatusCode } from './statusCode';

const instance: AxiosInstance = axios.create(axiosConfig);
axios.defaults.headers['Content-Type'] = 'application/json;';
instance.interceptors.request.use(
  (req: InternalAxiosRequestConfig) => {
    // set token in header
    if (storage.isAuthenticated(ACCESS_TOKEN)) {
      req.headers.Authorization = storage.getAuthorization(ACCESS_TOKEN);
    }
    return req;
  },
  (err: AxiosError) => Promise.reject(err)
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  (err: AxiosError) => {
    const { response } = err;
    const { data, status } = response || {};
    if (response) {
      handleCode(status as number, data as string);
    }
    return Promise.reject(data);
  }
);

export const request = (config: AxiosRequestConfig) => {
  return instance.request(config);
};

export const REQ = {
  get: (
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ) => {
    return instance.get(url, { params, ...config });
  },

  post: (
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ) => {
    return instance.post(url, data, config);
  },

  put: (
    url: string,
    data?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ) => {
    return instance.put(url, data, config);
  },

  destory: (
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ) => {
    return instance.delete(url, { params, ...config });
  },
};

function handleCode(code: number, msg: any): void {
  switch (code) {
    case ResponseStatusCode.UNAUTHORIZED:
      storage.remove(ACCESS_TOKEN);
      window.showToast(msg.message, 'error');
      break;
    case ResponseStatusCode.FORBIDDEN:
      window.showToast(msg.message, 'error');
      break;
    case ResponseStatusCode.INTERNAL_SERVER_ERROR:
      window.showToast(msg.message, 'error');
      break;
    case ResponseStatusCode.BAD_GATEWAY:
      window.showToast(msg.message, 'error');
      break;
    case ResponseStatusCode.BAD_REQUEST:
      window.showToast(msg.message, 'error');
      break;
    case ResponseStatusCode.NOT_FOUND:
      window.showToast(msg.message, 'error');
      break;
    case ResponseStatusCode.METHOD_NOT_ALLOWED:
      window.showToast(msg.message, 'error');
      break;
    case ResponseStatusCode.CONFLICT:
      window.showToast(msg.message, 'error');
      break;
    case ResponseStatusCode.TOO_MANY_REQUESTS:
      window.showToast(msg.message, 'error');
      break;
    default:
      window.showToast(msg.message, 'error');
  }
}
