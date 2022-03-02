import { SEARCH_GAME } from "../../types/types";
import { searchGameAction } from "./actions";

describe("Action test", () => {
  it("Should return correct value", () => {
    const payload = ["a", "b", "c"];
    expect(searchGameAction(payload)).toEqual({
      type: SEARCH_GAME,
      payload: payload,
    });
  });
});
