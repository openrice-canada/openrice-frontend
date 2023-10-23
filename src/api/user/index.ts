import { AxiosApiClientBuilder } from "..";
import { User } from "./type";

const apiClient = new AxiosApiClientBuilder()
  .withResourceName("/user")
  .build();

export const getUserList = async (): Promise<User[]> => {
  return apiClient.get("");
};
