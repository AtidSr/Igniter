import { GET_GAME, SET_PAGE_LOADING, SET_PAGINATION } from "../../types/types";

export const INITIAL_STATE = {
  gameList: [],
  count: 0,
  isLoading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GAME:
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
    default:
      return state;
  }
};

export default reducer;
