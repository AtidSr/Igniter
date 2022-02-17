import React from "react";
import styled from "styled-components";

const Header = () => {
  const HeaderContainer = styled.div`
    display: flex;
    width: "100vw";
  `;

  const IconContainer = styled.div`
    padding: 1em 2em;
  `;

  const Icon = styled.h1`
    font-family: "Roboto", sans-serif;
    font-weight: "900";
    font-style: italic;
    text-transform: uppercase;
  `;

  const SearchInput = styled.input`
    margin: 1em 2em;
    border-radius: 50px;
    border: 1px solid #dfe1e5;
    opacity: 0.6;
    width: 50%;
    padding: 0 1.7em;
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
  `;

  return (
    <HeaderContainer>
      <IconContainer>
        <Icon>Iginter</Icon>
      </IconContainer>
      <SearchInput type="text" />
    </HeaderContainer>
  );
};

export default Header;
