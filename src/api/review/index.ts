import { AxiosApiClientBuilder } from "..";
import { Review } from "./ReviewType";

const apiClient = new AxiosApiClientBuilder()
  .withResourceName("/review")
  .build();

export const getReviewList = async (): Promise<Review[]> => {
  return apiClient.get("");
}

export const getReviewListByRestaurantId = async (
  restaurantId: string
): Promise<Review[]> => {
  return apiClient.get("", { params: { restaurantId } });
}

export const postRating = async (
  review: Review,
  rating: number
): Promise<void> => {
  return apiClient.post("", JSON.stringify({ ...review, rating }));
};

export const getReviewByReviewId = async(
  reviewId: string
): Promise<Review> => {
  return apiClient.get(reviewId);
}
