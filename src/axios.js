import axios from "axios";

export default axios.create({
  // withCredentials: true,
  // baseURL: "https://api.ultraxpert.in/",
  baseURL: "http://13.127.139.72:8000",
  // baseURL: "http://localhost:8000/",
});
