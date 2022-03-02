import React from "react";
import styled, { css } from "styled-components";
import { DOTS, usePagination } from "../utils/usePagination";

const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

const PaginationItem = styled.div`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
  ${(props) => styleSwitch(props.condition)}
`;

const Arrow = styled.div`
  &::before {
    position: relative;
    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
    content: "";
    /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }
`;
const ArrowLeft = styled(Arrow)`
  transform: rotate(-135deg) translate(-50%);
`;

const ArrowRight = styled(Arrow)`
  transform: rotate(45deg);
`;

const styleSwitch = (condition) => {
  switch (condition) {
    case "disabled":
      return css`
        pointer-events: none;

        .arrow::before {
          border-right: 0.12em solid rgba(0, 0, 0, 0.43);
          border-top: 0.12em solid rgba(0, 0, 0, 0.43);
        }

        &:hover {
          background-color: transparent;
          cursor: default;
        }
      `;
    case "selected":
      return css`
        background-color: rgba(0, 0, 0, 0.08);
      `;
    case "dot":
      return css`
        &:hover {
          background-color: transparent;
          cursor: default;
        }
      `;
    default:
      return;
  }
};
const PaginationComponent = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer>
      <PaginationItem
        condition={`${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <ArrowLeft />
      </PaginationItem>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItem condition={"dot"} key={`dot_${index}`}>
              &#8230;
            </PaginationItem>
          );
        }

        return (
          <PaginationItem
            condition={"selected"}
            onClick={() => onPageChange(pageNumber)}
            key={`page_${index}`}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        condition={`${currentPage === lastPage ? "disabled" : ""}`}
        onClick={onNext}
      >
        <ArrowRight />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default PaginationComponent;
