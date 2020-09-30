import axios from "axios";
import Axios from "axios";

const webAPI = Axios.create({ baseURL: "http://localhost:61361/api/" });

export default webAPI;
