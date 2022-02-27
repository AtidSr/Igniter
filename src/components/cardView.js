import React from "react";
import styled from "styled-components";
import Card from "./card";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;
  width: 60%;
  margin: 2.4em auto;
`;

const CardViewComponent = () => {
  return (
    <GridContainer>
      <Card />
    </GridContainer>
  );
};

export default CardViewComponent;
