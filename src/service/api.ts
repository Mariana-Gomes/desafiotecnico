import axios from "axios";

const IP = "192.168.0.108";

const api = axios.create({
  baseURL: `http://${IP}:3000`,
});

export default api;
