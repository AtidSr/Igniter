import { SEARCH_GAME, SET_SEARCH_LOADING } from "../../types/types";

export const searchGameAction = (payload) => {
  return {
    type: SEARCH_GAME,
    payload: payload,
  };
};

export const setSearchLoading = (payload) => {
  return {
    type: SET_SEARCH_LOADING,
    payload: payload,
  };
};
