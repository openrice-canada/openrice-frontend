import { AxiosApiClientBuilder } from "..";
import { Restaurant, SearchRestaurantQuery } from "./RestaurantType";

const apiClient = new AxiosApiClientBuilder()
  .withResourceName("/restaurant")
  .build();

export const getRestaurantList = async (input: SearchRestaurantQuery): Promise<Restaurant[]> => {
  return apiClient.get("", { params: input });
};

export const getRestaurantDetail = async (restaurantId: string): Promise<Restaurant> => {
  return apiClient.get(restaurantId);
};
