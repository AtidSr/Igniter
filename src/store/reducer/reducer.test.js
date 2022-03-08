import { GET_GAME, SET_PAGINATION } from "../../types/types";
import reducer, { INITIAL_STATE } from "./reducer";

describe("Test reducer", () => {
  it("Should return initial state", () => {
    const action = { type: "TEST_TYPE" };
    expect(reducer(INITIAL_STATE, action)).toEqual(INITIAL_STATE);
  });

  it("Should return correct state", () => {
    const mock = [
      {
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        playtime: 71,
        metacritic: 97,
        esrb_rating: {
          name: "Mature",
          slug: "mature",
        },
      },
    ];
    const action = { type: GET_GAME, payload: mock };
    expect(reducer(INITIAL_STATE, action)).toEqual({
      gameList: mock,
      count: 0,
      isLoading: false,
    });
  });

  it("Should return count correctly", () => {
    const count = 9999;
    const action = { type: SET_PAGINATION, payload: count };
    expect(reducer(INITIAL_STATE, action)).toEqual({
      gameList: [],
      count: count,
      isLoading: false,
    });
  });
});
