import axios from "axios";
const URL = "https://api.itbook.store/1.0/new";
const api = axios.create(URL);
export default api;
