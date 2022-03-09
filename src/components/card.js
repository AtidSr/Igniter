import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  min-height: 30vh;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  background: #f7f7f8;
  transition: 0.3s transform;
  box-shadow: rgb(0 0 0 / 8%) 0 1px;
  &:hover,
  &:focus {
  }
`;
const CardImage = styled.div`
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

const CardComponent = (props) => {
  const { game } = props;
  return (
    <CardContainer>
      <CardImage background={game.background_image} />
      <CardInfo> {game.name}</CardInfo>
    </CardContainer>
  );
};

export default CardComponent;

PropTypes.CardComponent = {
  game: PropTypes.object,
};
