import axios from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API, // api 的 base_url
  timeout: 50000, // 请求超时时间
  withCredentials: true
});
// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code != 200) {
      return alert(res.msg);
    } else {
      return res.data;
    }
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
export default service;
