import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getGameApi } from "../api/getGame";
import { routePath } from "../appRoute";
import HeaderComponent from "../components/header";

import {
  searchGameAction,
  setSearchLoading,
} from "../store/action/gameSearchAction";
import { gameSearchSelector } from "../store/selector/searchSelector";
import DetailPageComponent from "./detailPage";
import SearchPageComponent from "./searchPage";

const PageIndexComponent = () => {
  const dispatch = useDispatch();
  const { searchResult, isLoading: isSearching } =
    useSelector(gameSearchSelector);
  const [input, setInput] = useState("");
  const location = useLocation();

  // Search game function
  const searchGame = useCallback(
    async (params) => {
      dispatch(setSearchLoading(true));
      const response = await getGameApi(params);
      dispatch(setSearchLoading(false));
      dispatch(searchGameAction(response.data.results));
    },
    [dispatch]
  );

  // search game when user input > 2
  useEffect(() => {
    if (input.length > 2) {
      searchGame({ search: input });
    }
  }, [searchGame, input, dispatch]);

  // switch content component when path change
  const pageSwitcher = useCallback(() => {
    if (location.pathname === routePath[1].path) {
      return <SearchPageComponent />;
    }
    if (location.pathname.includes("/detail")) {
      return <DetailPageComponent />;
    }
  }, [location.pathname]);

  return (
    <div data-testid="page-index">
      <HeaderComponent
        inputValue={input}
        setInput={setInput}
        onChange={(e) => setInput(e.target.value)}
        isLoading={isSearching}
        searchResult={searchResult}
      />
      {pageSwitcher()}
    </div>
  );
};

export default PageIndexComponent;
