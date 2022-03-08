import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getGameApi } from "../api/getGame";
import CardViewComponent from "../components/cardView";
import HeaderComponent from "../components/header";
import ItemSelectComponent from "../components/itemSelect";
import Pagination from "../components/pagination";
import {
  getGameAction,
  setLoadingStatus,
  setPagination,
} from "../store/action/actions";
import {
  searchGameAction,
  setSearchLoading,
} from "../store/action/gameSearchAction";
import { gameSearchSelector } from "../store/selector/searchSelector";
import { gameListSelector } from "../store/selector/selector";
import { orderFilter, ordering } from "../types/order";
import LoadingPageComponent from "./loadingPage";

// Delay 100 milliseconds then execute callBack function
const timeout = (callBack) => {
  setTimeout(callBack, 100);
};

let PageSize = 20;

const Container = styled.div`
  width: 60%;
  margin: 1.4rem auto;
`;

const SearchPageComponent = () => {
  const dispatch = useDispatch();
  const { gameList, count, isLoading } = useSelector(gameListSelector);
  const { searchResult, isLoading: isSearching } =
    useSelector(gameSearchSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [option, setOption] = useState(orderFilter[0]);
  const [order, setOrder] = useState(ordering.ASC);
  const [input, setInput] = useState("");

  // Get game function
  const fetchGame = useCallback(
    async (params) => {
      dispatch(setLoadingStatus(true));
      const response = await getGameApi(params);
      dispatch(setLoadingStatus(false));
      dispatch(getGameAction(response.data.results));
      dispatch(setPagination(response.data.count));
    },
    [dispatch]
  );

  // Search game function
  const SearchGame = useCallback(
    async (params) => {
      dispatch(setSearchLoading(true));
      const response = await getGameApi(params);
      dispatch(setSearchLoading(false));
      dispatch(searchGameAction(response.data.results));
    },
    [dispatch]
  );

  // fetch game when landing
  useEffect(() => {
    timeout(() =>
      fetchGame({
        ordering: `${order === ordering.ASC ? "" : "-"}${option}`,
        page: currentPage,
      })
    );
  }, [currentPage, option, order, dispatch, fetchGame]);

  // search game when user input > 2
  useEffect(() => {
    if (input.length > 2) {
      SearchGame({ search: input });
    }
  }, [SearchGame, input, dispatch]);

  return (
    <div data-testid="search_page_component">
      <HeaderComponent
        inputValue={input}
        onChange={(e) => setInput(e.target.value)}
        isLoading={isSearching}
        searchResult={searchResult}
      />
      <Container>
        <ItemSelectComponent
          option={option}
          setOption={setOption}
          setCurrentPage={setCurrentPage}
          order={order}
          setOrder={setOrder}
          value={orderFilter}
        />
        {isLoading ? (
          <LoadingPageComponent />
        ) : (
          <CardViewComponent gameList={gameList} />
        )}

        <Pagination
          currentPage={currentPage}
          totalCount={count}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Container>
    </div>
  );
};

export default SearchPageComponent;
