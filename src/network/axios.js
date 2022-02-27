import axios from "axios";

const instance = axios.create({
  baseURL: "https://iraters-backend.herokuapp.com",
  headers: {
    Authorization: localStorage.getItem("user_token") || null,
  },
});

export default instance;
