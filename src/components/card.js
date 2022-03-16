import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import noImg from "../asset/404.jpg";

const Video = styled.video`
  display: none;
  width: 100%;
`;

const CardImage = styled.div`
  width: 100%;
  height: 20vh;
  ${(props) => ({
    background: `url(${props.background}) no-repeat scroll 16px`,
  })}
  background-position: center;
  background-size: cover;
  transition: all 0.3s;
`;

const CardInfo = styled.div`
  max-height: 7vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 0 0.4em;
`;

const Text = styled.p`
  text-align: right;
  color: #06f;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  /* display: none; */
  width: 100%;
  padding: 0 1rem;
`;

const CardContainer = styled.div`
  height: 27vh;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  background: #f7f7f8;
  box-shadow: rgb(0 0 0 / 8%) 0 1px;

  &:hover ${CardImage}, &:focus ${CardImage} {
    height: 17vh;
  }
  /* &:hover ${CardInfo}, &:focus ${CardInfo} {
    max-height: 10vh;
    transition: max-height 0.6s ease-in;
  } */
  /* &:hover ${Video}, &:focus ${Video}, &:hover ${Text}, &:focus ${Text} {
    display: block;
  } */
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CardComponent = (props) => {
  const { game } = props;

  return (
    <CardContainer>
      <StyledLink to={`/detail/${game.slug}`}>
        <CardImage background={game?.background_image || noImg} />
        <CardInfo> {game.name}</CardInfo>
        {/* <Video autoPlay muted loop src={game?.clip?.clip}></Video> */}
        <Text>find out more{" >>> "}</Text>
      </StyledLink>
    </CardContainer>
  );
};

export default CardComponent;

PropTypes.CardComponent = {
  game: PropTypes.object,
};
