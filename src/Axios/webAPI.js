import Axios from "axios";

const webAPI = Axios.create({
  baseURL: "https://notebookpowerapi.azurewebsites.net/",
});

export default webAPI;
