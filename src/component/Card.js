import React from "react";
import styled from "styled-components";
import mock from "../api/mock/mock.json";

const result = mock.results;

const CardContainer = styled.div`
  border: 1px solid #dfe1e5;
  min-height: 30vh;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
`;
const CardImage = styled.div`
  background-color: red;
  width: 100%;
  min-height: 20vh;
  ${(props) => ({
    background: `url(${props.background}) no-repeat scroll 16px`,
  })}
  background-position: center;
  background-size: cover;
`;

const CardInfo = styled.div`
  max-height: 10vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 0 0.4em;
`;

const CardComponent = () => {
  return (
    <CardContainer>
      <CardImage background={result[0].background_image} />
      <CardInfo> {result[0].name}</CardInfo>
    </CardContainer>
  );
};

export default CardComponent;
