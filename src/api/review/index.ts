import { AxiosApiClientBuilder } from "..";
import { Review } from "./ReviewType";

const apiClient = new AxiosApiClientBuilder()
  .withResourceName("/review")
  .build();

export const postRating = async (
  review: Review,
  rating: number
): Promise<void> => {
  return apiClient.post("", JSON.stringify({ ...review, rating }));
};
