import React from "react";
import styled from "styled-components";
import Card from "./card";
import PropTypes from "prop-types";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 2.4em auto;
`;

const CardViewComponent = (props) => {
  const { gameList = [] } = props;

  if (gameList.lenght === 0) {
    return <></>;
  }

  return (
    <GridContainer>
      {gameList.map((game, index) => {
        return <Card game={game} key={`card_${index}`} />;
      })}
    </GridContainer>
  );
};

export default CardViewComponent;

CardViewComponent.propTypes = {
  gameList: PropTypes.array,
};
