import axios from "axios";

const api = axios.create({
  baseURL: "https://yelp-camp-server.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
