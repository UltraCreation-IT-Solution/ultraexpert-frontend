import axios from "axios";

export default axios.create({
  // withCredentials: true,
  // baseURL: "https://api.ultraxpert.in/",
  baseURL: "http://13.202.113.139:8000/",
  // baseURL: "http://localhost:8000/",
});
