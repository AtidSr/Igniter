import { SEARCH_GAME } from "../../types/types";

export const INITIAL_STATE = {
  gameList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_GAME:
      return {
        ...state,
        gameList: action.payload || [],
      };

    default:
      return state;
  }
};

export default reducer;
