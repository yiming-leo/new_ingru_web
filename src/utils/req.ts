"use client"
import axios from 'axios';
import { message } from 'antd';




let userInfo
if (typeof window !== 'undefined') {
  // 在浏览器端执行的代码
  userInfo = JSON.parse(localStorage.getItem('userInfo'));
}

const token = userInfo?.data?.token || ''
const instance = axios.create({
    // baseURL: process.env.BASE_API_URL, http://192.168.2.17:9999
    baseURL:'http://192.168.2.17:9999',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'token':token
    }
});

instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    if(response.data.msg) {
      message.success(response.data.msg)
    }
    return response.data;
  }, function (error) {
    if(error && error.response) {
        switch(error.response.status) {
            case 401:
                // 客户端环境
                window && (location.href = '/user/login');
            case 500:
              message.error(error.response.data.msg)

        }
    }
    return Promise.reject(error);
  });

  export default instance
