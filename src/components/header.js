import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import search from "../asset/search.svg";
import PropTypes from "prop-types";
import SpinnerComponent from "./spinner";

const switchInputStyle = (condition) => {
  switch (condition) {
    case "SEARCHING":
      return css`
        border-radius: 0px;
        border: none;
        box-shadow: 0 -5px 5px #dfe1e5;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        opacity: 1;
      `;

    default:
      return css`
        border: 1px solid #dfe1e5;
        &:focus,
        &:hover {
          opacity: 1;
          background-color: #fff;
          box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
          border-color: rgba(223, 225, 229, 0);
        }
      `;
  }
};
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: 0 0 1px rgb(0, 0, 0, 0.3);
  padding: 0.4rem;
  z-index: 77;
`;

const IconContainer = styled.div`
  display: flex;
  height: 4em;
  padding: 1em 2em;
  color: #06f;
`;

const Icon = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: "900";
  font-style: italic;
  text-transform: uppercase;
  margin-left: 0.3em;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 50px;
  opacity: 0.6;
  padding: 0 2.6em;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  height: 3.125rem;
  ${(props) => ({
    background: `url(${props.background}) no-repeat scroll 16px`,
    backgroundSize: "16px",
  })}
  ${(props) => switchInputStyle(props.condition)};
`;

const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const DropDownContainer = styled.ul`
  outline: none;
  position: absolute;
  z-index: 2;
  background-color: white;
  list-style: none;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0 1px 1px rgb(0, 0, 0, 0.4);
  margin-top: 3.125rem;
  overflow: hidden;
  top: 0;
  &::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 1px;
    background-color: #dfe1e5;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
  ${(props) => ({
    display: props.display,
  })}
`;

const DropDownItem = styled.li`
  padding: 0.625rem 1rem;
  text-indent: 1rem;
  &:hover {
    background-color: #06f;
    color: white;
  }
  &:first-child {
    margin-top: 1rem;
  }
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const HeaderComponent = (props) => {
  const { inputValue, onChange, isLoading, searchResult } = props;
  const [displayResult, setDisplayResult] = useState(false);
  const dropDownRef = useRef(null);
  const inputRef = useRef(null);
  const [isClickOutSide, setIsClickOutSide] = useState(false);

  // Check whether user click out side search bar or not
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropDownRef?.current &&
        !dropDownRef?.current.contains(event.target) &&
        inputRef?.current &&
        !inputRef?.current.contains(event.target)
      ) {
        setIsClickOutSide(true);
      } else if (isClickOutSide) {
        setIsClickOutSide(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef, inputRef, isClickOutSide]);

  useEffect(() => {
    setDisplayResult(false);
  }, [isClickOutSide]);

  useEffect(() => {
    if (isLoading) {
      setDisplayResult(true);
    }
    if (inputValue?.length <= 2) {
      setDisplayResult(false);
    }
  }, [inputValue, isLoading]);

  return (
    <HeaderContainer>
      <StyledLink to={`/browse`}>
        <IconContainer>
          <Icon>Iginter</Icon>
        </IconContainer>
      </StyledLink>

      <SearchContainer>
        <SearchInput
          ref={inputRef}
          type="text"
          background={search}
          value={inputValue}
          onChange={onChange}
          condition={displayResult ? "SEARCHING" : ""}
          tabIndex={0}
        />
        <DropDownContainer
          display={displayResult ? "block" : "none"}
          ref={dropDownRef}
        >
          {isLoading ? (
            <LoadingContainer>
              <SpinnerComponent />
            </LoadingContainer>
          ) : (
            searchResult?.map((result, index) => {
              return (
                <DropDownItem key={`result_${index}`}>
                  {result.name}
                </DropDownItem>
              );
            })
          )}
        </DropDownContainer>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default React.memo(HeaderComponent);

HeaderComponent.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchResult: PropTypes.array.isRequired,
};
