import useMock from "../environment";
import { ENDPOINT_SEARCH } from "./endpoint";
import axiosInstance from "./axios";

const API_KEY = process.env.REACT_APP_API_KEY;
export const getGameApi = (otherParams) => {
  const params = useMock ? { key: API_KEY, ...otherParams } : {};
  return axiosInstance.get(ENDPOINT_SEARCH, { params: params });
};
