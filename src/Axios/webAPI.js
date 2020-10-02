import axios from "axios";
import Axios from "axios";

const webAPI = Axios.create({
  baseURL: "http://localhost:5000/",
});

export default webAPI;
