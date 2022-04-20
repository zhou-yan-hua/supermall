import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Toast } from 'antd-mobile';

class Request {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    //给所有实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        //添加拦截动画
        Toast.show({
          icon: 'loading',
          content: '加载中…',
          maskClickable: false,
        });
        return config;
      },
      (err) => {
        return err;
      },
    );

    this.instance.interceptors.response.use(
      (res) => {
        //清除拦截动画
        Toast.clear();
        return res.data;
      },
      (err) => {
        return err;
      },
    );
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'GET' });
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'POST' });
  }
}

export default Request;
