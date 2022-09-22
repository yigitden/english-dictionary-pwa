import axios from "axios";

const Api = () =>
  axios.create({
    baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
  });

export default Api;