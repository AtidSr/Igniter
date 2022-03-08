import gameSearchReducer, { INITIAL_STATE } from "./gameSearchReducer";

describe("Test reducer", () => {
  it("Should return initial state", () => {
    const action = { type: "TEST_TYPE" };
    expect(gameSearchReducer(INITIAL_STATE, action)).toEqual(INITIAL_STATE);
  });
});
