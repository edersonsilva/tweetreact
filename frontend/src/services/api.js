import aaxios from "axios";

const api = aaxios.create({
  baseURL: "http://localhost:3000"
});

export default api;
