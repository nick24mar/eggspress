import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d3f58c31e44a4c1590186792e6077982",
  },
});
