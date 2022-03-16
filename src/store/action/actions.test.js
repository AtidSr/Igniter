import {
  CLEAR_GAME_DETAIL,
  CLEAR_GAME_LIST,
  SET_GAME,
  SET_GAME_DETAIL,
  SET_PAGE_LOADING,
  SET_PAGINATION,
} from "../../types/types";
import {
  clearGameDetailAction,
  clearGameListAction,
  setDetailAction,
  setGameAction,
  setLoadingStatus,
  setPagination,
} from "./actions";

describe("Action test", () => {
  it("Should return correct value", () => {
    const payload = ["a", "b", "c"];
    expect(setGameAction(payload)).toEqual({
      type: SET_GAME,
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

  it("Should return correct value (set detail)", () => {
    const payload = { name: "test", slug: "asdas" };
    expect(setDetailAction(payload)).toEqual({
      type: SET_GAME_DETAIL,
      payload: payload,
    });
  });

  it("Should return correct value (clear detail)", () => {
    expect(clearGameDetailAction()).toEqual({
      type: CLEAR_GAME_DETAIL,
    });
  });

  it("Should return correct value (clear list)", () => {
    expect(clearGameListAction()).toEqual({
      type: CLEAR_GAME_LIST,
    });
  });
});
