import axios from "axios";

const getToken = () => localStorage.getItem("token");

const api = axios.create({
  baseURL: "https://yelp-camp-server.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log("ffff", token);
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
