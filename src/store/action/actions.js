import { GET_GAME, SET_PAGE_LOADING, SET_PAGINATION } from "../../types/types";

export const getGameAction = (payload) => {
  return {
    type: GET_GAME,
    payload: payload,
  };
};

export const setPagination = (payload) => {
  return {
    type: SET_PAGINATION,
    payload: payload,
  };
};

export const setLoadingStatus = (payload) => {
  return { type: SET_PAGE_LOADING, payload: payload };
};
