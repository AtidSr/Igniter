import { SEARCH_GAME, SET_SEARCH_LOADING } from "../../types/types";
import { searchGameAction, setSearchLoading } from "./gameSearchAction";

describe("Game search action test", () => {
  it("Should return correct value", () => {
    const payload = ["a", "b", "c"];
    expect(searchGameAction(payload)).toEqual({
      type: SEARCH_GAME,
      payload: payload,
    });
  });

  it("Should return true when loading", () => {
    const payload = true;
    expect(setSearchLoading(payload)).toEqual({
      type: SET_SEARCH_LOADING,
      payload: payload,
    });
  });
});
