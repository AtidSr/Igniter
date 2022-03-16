import axiosInstance from "./axios";
import { useMock } from "../environment";
import { ENDPOINT_SEARCH } from "./endpoint";
import { API_KEY } from "../types/key";

export const getGameDetailApi = (gameSlug) => {
  const params = !useMock ? { key: API_KEY } : {};
  const slug = useMock ? "test" : gameSlug;

  return axiosInstance.get(`${ENDPOINT_SEARCH}/${slug}`, {
    params: params,
  });
};
