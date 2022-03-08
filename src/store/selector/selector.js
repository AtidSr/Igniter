import { createSelector } from "reselect";

const gameSelector = (state) => state.gameReducer;

export const gameListSelector = createSelector(
  [gameSelector],
  (gameListState) => {
    return gameListState;
  }
);
