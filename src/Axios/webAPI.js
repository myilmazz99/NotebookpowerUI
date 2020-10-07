import Axios from "axios";

const webAPI = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default webAPI;
