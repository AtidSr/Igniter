import { useMock } from "../environment";
import { ENDPOINT_SEARCH } from "./endpoint";
import axiosInstance from "./axios";
import { API_KEY } from "../types/key";

export const getGameApi = (otherParams) => {
  const params = !useMock ? { key: API_KEY, ...otherParams } : {};
  return axiosInstance.get(ENDPOINT_SEARCH, { params: params });
};
