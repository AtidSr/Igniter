import { gameSearchSelector } from "./searchSelector";

describe("Selector test", () => {
  it("Should return gameListSelector value correctly", () => {
    const mockValue = {
      searchResult: [],
      isLoading: false,
    };
    const mockState = {
      searchReducer: mockValue,
    };
    expect(gameSearchSelector(mockState)).toEqual(mockValue);
  });
});
