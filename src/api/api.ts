import axios from "axios";

export const RENTAL_CAR_API = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});
