import {
  CLEAR_GAME_DETAIL,
  SET_GAME,
  SET_GAME_DETAIL,
  SET_PAGINATION,
} from "../../types/types";
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
    const action = { type: SET_GAME, payload: mock };
    expect(reducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      gameList: mock,
    });
  });

  it("Should return count correctly", () => {
    const count = 9999;
    const action = { type: SET_PAGINATION, payload: count };
    expect(reducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      count: count,
    });
  });

  it("Should return detail correctly", () => {
    const payload = { name: "TEST", slug: "test" };
    const action = { type: SET_GAME_DETAIL, payload: payload };
    expect(reducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      gameDetail: payload,
    });
  });

  it("Should able to clear gameDetail state", () => {
    const action = { type: CLEAR_GAME_DETAIL };
    expect(reducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
    });
  });
});
