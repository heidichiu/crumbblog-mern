import axios from "axios";

//request interceptor to add the auth token header to requests
axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user ? user.accessToken : null;
    if (accessToken) {
      config.headers["x-auth-token"] = accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    let user = JSON.parse(localStorage.getItem("user"));
    let refreshToken = user ? user.refreshToken : null;
    if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios.post(`/auth/token/refresh`, { token: refreshToken }).then((res) => {
        if (res.status === 200) {
          user.refreshToken = res.data.refreshToken;
          user.accessToken = res.data.accessToken;
          localStorage.setItem("user", user);
          console.log("Access token refreshed!");
          return axios(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
