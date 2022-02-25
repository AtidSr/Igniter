import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./card";
import { useSelector } from "react-redux";
import { fetchGame } from "../store/action/api/fetchGame";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;
  width: 60%;
  margin: 2.4em auto;
`;
const timeout = (callBack) => {
  setTimeout(callBack, 100);
};
const CardViewComponent = () => {
  const { gameList } = useSelector((state) => state.gameReducer);

  useEffect(() => {
    timeout(fetchGame);
  }, []);

  if (gameList.length === 0) {
    return <></>;
  }
  return (
    <GridContainer>
      <Card />
    </GridContainer>
  );
};

export default CardViewComponent;
