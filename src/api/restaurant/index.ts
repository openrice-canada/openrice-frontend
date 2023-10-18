import { AxiosApiClientBuilder } from "..";
import { Restaurant } from "./type";

const apiClient = new AxiosApiClientBuilder()
  .withResourceName("/api/restaurant")
  .build();

export const getRestaurantList = async (): Promise<Restaurant[]> => {
  return apiClient.get("");
};
