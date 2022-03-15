import {
  CLEAR_GAME_DETAIL,
  SET_GAME,
  SET_GAME_DETAIL,
  SET_PAGE_LOADING,
  SET_PAGINATION,
} from "../../types/types";

export const INITIAL_STATE = {
  gameList: [],
  count: 0,
  isLoading: false,
  gameDetail: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GAME:
      return {
        ...state,
        gameList: action.payload || [],
      };
    case SET_PAGINATION:
      return {
        ...state,
        count: action.payload || 0,
      };
    case SET_PAGE_LOADING:
      return {
        ...state,
        isLoading: action.payload || false,
      };
    case SET_GAME_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };
    case CLEAR_GAME_DETAIL:
      return {
        ...state,
        gameDetail: {},
      };
    default:
      return state;
  }
};

export default reducer;
