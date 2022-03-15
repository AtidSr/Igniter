import { INITIAL_STATE } from "../reducer/reducer";
import { gameDetailSelector, gameListSelector } from "./selector";

describe("Selector test", () => {
  it("Should return gameListSelector value correctly", () => {
    const mockValue = {
      ...INITIAL_STATE,
    };
    const mockState = {
      gameReducer: mockValue,
    };
    expect(gameListSelector(mockState)).toEqual(mockValue);
  });

  it("Should return gameDetail value correctly", () => {
    const mockValue = {
      gameDetail: { name: "test" },
    };
    const mockState = {
      gameReducer: mockValue,
    };

    expect(gameDetailSelector(mockState)).toEqual(mockValue.gameDetail);
  });
});
