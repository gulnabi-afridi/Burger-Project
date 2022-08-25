import axios from "axios";
const instance = axios.create({
  baseURL: "https://burger-project-77d42-default-rtdb.firebaseio.com",
});
export default instance;
