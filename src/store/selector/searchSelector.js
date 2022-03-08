import { createSelector } from "reselect";

const gameSearchState = (state) => state.searchReducer;

export const gameSearchSelector = createSelector(
  [gameSearchState],
  (gameSearchState) => {
    return gameSearchState;
  }
);
