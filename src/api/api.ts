import axios from "axios";

export const URL = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});
