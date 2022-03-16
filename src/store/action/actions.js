import {
  CLEAR_GAME_DETAIL,
  CLEAR_GAME_LIST,
  SET_GAME,
  SET_GAME_DETAIL,
  SET_PAGE_LOADING,
  SET_PAGINATION,
} from "../../types/types";

export const setGameAction = (payload) => {
  return {
    type: SET_GAME,
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

export const setDetailAction = (payload) => {
  return {
    type: SET_GAME_DETAIL,
    payload: payload,
  };
};

export const clearGameDetailAction = () => {
  return {
    type: CLEAR_GAME_DETAIL,
  };
};

export const clearGameListAction = () => {
  return {
    type: CLEAR_GAME_LIST,
  };
};
