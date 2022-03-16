import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getGameApi } from "../api/getGame";
import CardViewComponent from "../components/cardView";
import ItemSelectComponent from "../components/itemSelect";
import Pagination from "../components/pagination";
import {
  clearGameListAction,
  setGameAction,
  setLoadingStatus,
  setPagination,
} from "../store/action/actions";

import { gameListSelector } from "../store/selector/selector";
import { orderFilter, ordering } from "../types/order";
import { timeout } from "../utils/timeout";
import LoadingPageComponent from "./loadingPage";

let PageSize = 20;

const Container = styled.div`
  width: 70%;
  margin: 1.4rem auto;
`;

const SearchPageComponent = () => {
  const dispatch = useDispatch();
  const { gameList, count, isLoading } = useSelector(gameListSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [option, setOption] = useState(orderFilter[0]);
  const [order, setOrder] = useState(ordering.ASC);

  // Get game function
  const fetchGame = useCallback(
    async (params) => {
      dispatch(setLoadingStatus(true));
      const response = await getGameApi(params);
      dispatch(setLoadingStatus(false));
      dispatch(setGameAction(response.data.results));
      dispatch(setPagination(response.data.count));
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

    return () => {
      dispatch(clearGameListAction());
    };
  }, [currentPage, option, order, dispatch, fetchGame]);

  return (
    <div data-testid="search_page_component">
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
