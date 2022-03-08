import { GET_GAME, SET_PAGE_LOADING, SET_PAGINATION } from "../../types/types";
import { getGameAction, setLoadingStatus, setPagination } from "./actions";

describe("Action test", () => {
  it("Should return correct value", () => {
    const payload = ["a", "b", "c"];
    expect(getGameAction(payload)).toEqual({
      type: GET_GAME,
      payload: payload,
    });
  });

  it("Should return correct value (set pagination)", () => {
    const payload = 99999;
    expect(setPagination(payload)).toEqual({
      type: SET_PAGINATION,
      payload: payload,
    });
  });

  it("Should return correct value (set loading)", () => {
    const payload = true;
    expect(setLoadingStatus(payload)).toEqual({
      type: SET_PAGE_LOADING,
      payload: payload,
    });
  });
});
