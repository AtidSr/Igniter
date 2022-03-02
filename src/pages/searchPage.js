import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CardViewComponent from "../components/cardView";
import HeaderComponent from "../components/header";
import ItemSelectComponent from "../components/itemSelect";
import Pagination from "../components/pagination";
import { fetchGame } from "../store/action/api/fetchGame";

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
  const { gameList } = useSelector((state) => state.gameReducer);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    timeout(fetchGame);
  }, []);

  return (
    <div data-testid="search_page_component">
      <HeaderComponent />
      <Container>
        <ItemSelectComponent />
        <CardViewComponent gameList={gameList} />
        <Pagination
          currentPage={currentPage}
          totalCount={gameList?.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Container>
    </div>
  );
};

export default SearchPageComponent;
