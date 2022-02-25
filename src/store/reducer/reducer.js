import { SEARCH_GAME } from "../../types/types";

const INITIAL_STATE = {
  gameList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_GAME:
      return {
        ...state,
        result: action?.payload,
      };

    default:
      return state;
  }
};

export default reducer;
