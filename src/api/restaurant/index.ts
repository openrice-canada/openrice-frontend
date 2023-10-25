import { AxiosApiClientBuilder } from "..";
import { Restaurant } from "./RestaurantType";

const apiClient = new AxiosApiClientBuilder()
  .withResourceName("/restaurant")
  .build();

export const getRestaurantList = async (): Promise<Restaurant[]> => {
  return apiClient.get("");
};

export const getRestaurantDetail = async (restaurantId: string): Promise<Restaurant> => {
  return apiClient.get(restaurantId);
};
