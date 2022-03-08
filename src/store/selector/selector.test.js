import { gameListSelector } from "./selector";

describe("Selector test", () => {
  it("Should return gameListSelector value correctly", () => {
    const mockValue = {
      gameList: [],
      count: 0,
      isLoading: false,
    };
    const mockState = {
      gameReducer: mockValue,
    };
    expect(gameListSelector(mockState)).toEqual(mockValue);
  });
});
