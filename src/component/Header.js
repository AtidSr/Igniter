import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ruler from "../asset/ruler.svg";
import search from "../asset/search.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  height: 4em;
  padding: 1em 2em;
  color: #3f37c9;
`;

const Icon = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: "900";
  font-style: italic;
  text-transform: uppercase;
  margin-left: 0.3em;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 50px;
  border: 1px solid #dfe1e5;
  opacity: 0.6;
  padding: 0 2.6em;
  font-family: inherit;
  font-size: inherit;
  &:focus,
  &:hover {
    opacity: 1;
    background-color: #fff;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
    outline: none;
  }
  ${(props) => ({
    background: `url(${props.background}) no-repeat scroll 16px`,
    backgroundSize: "16px",
  })}
`;

const SearchContainer = styled.div`
  display: flex;
  padding: 0.5em;
  width: 50%;
`;

const Image = styled.img`
  filter: invert(26%) sepia(99%) saturate(3070%) hue-rotate(317deg)
    brightness(98%) contrast(97%);
`;

const RouteLink = styled(Link)`
  text-decoration: none;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <RouteLink to={`/about`}>
        <IconContainer>
          <Image src={ruler} alt="icon" />
          <Icon>Iginter</Icon>
        </IconContainer>
      </RouteLink>

      <SearchContainer>
        <SearchInput type="text" background={search} />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
