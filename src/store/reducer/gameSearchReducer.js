import { SEARCH_GAME, SET_SEARCH_LOADING } from "../../types/types";

export const INITIAL_STATE = {
  searchResult: [],
  isLoading: false,
};

const gameSearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_GAME:
      return {
        ...state,
        searchResult: action.payload || [],
      };
    case SET_SEARCH_LOADING:
      return {
        ...state,
        isLoading: action.payload || false,
      };
    default:
      return state;
  }
};

export default gameSearchReducer;
