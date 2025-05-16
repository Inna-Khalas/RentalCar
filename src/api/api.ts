import axios from "axios";

export const RentalCarApi = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});
