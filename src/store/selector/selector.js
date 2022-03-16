import { createSelector } from "reselect";

const gameSelector = (state) => state.gameReducer;

export const gameListSelector = createSelector(
  [gameSelector],
  (gameListState) => {
    return gameListState;
  }
);

export const gameDetailSelector = createSelector(
  [gameSelector],
  (gameListState) => {
    return gameListState.gameDetail;
  }
);

export const isLoadingSelector = createSelector(
  [gameSelector],
  (gameListState) => {
    return gameListState.isLoading;
  }
);
