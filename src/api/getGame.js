import { ENDPOINT_SEARCH } from "./endpoint";
import { api } from "./mock/mockSetup";

export const getGameApi = () => {
  return api.get(ENDPOINT_SEARCH);
};
