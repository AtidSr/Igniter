import { SEARCH_GAME } from "../../types/types";

export const searchGameAction = (payload) => {
  return {
    type: SEARCH_GAME,
    payload: payload,
  };
};
