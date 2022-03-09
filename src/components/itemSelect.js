import React, { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ordering } from "../types/order";

const Select = styled.button`
  border: none;
  padding: 0.625rem 1.6rem 0.625rem 1rem;
  font-size: inherit;
  border-radius: 5px;
  background-color: #f7f7f8bd;
  cursor: pointer;
  width: 25%;

  &:focus,
  &:hover {
    box-shadow: 0 0 7px rgb(0, 0, 0, 0.1);
  }
`;

const Arrow = styled.i`
  border: solid rgb(0, 0, 0, 0.5);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
`;

const RotateArrow = styled(Arrow)`
  margin-left: 1rem;
  cursor: pointer;
  position: absolute;
  right: 9px;
  top: 7px;
  &:hover {
    border-color: #06f;
  }
  ${(props) => `transform: rotate(${props.degree}deg)`}
`;

const Option = styled.li`
  padding: 0.625rem 1rem;
  text-indent: 1.3rem;
  text-transform: capitalize;
  &:hover {
    background: #06f;
    color: #fff;
  }
`;

const OptionList = styled.ul`
  background: #fff;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.1);
  position: absolute;
  border-radius: 5px;
  list-style-type: none;
  left: 0;
  right: 0;
  margin-top: -2px;
  z-index: 99;

  ${(props) => `
    ${
      props.isSelect
        ? `
    padding: 0.625rem 0;
    &::before {
    content: "";
    height: 12px;
    width: 12px;
    position: absolute;
    border-radius: 0 0 4px;
    margin-left: -5px;
    left: 50%;
    transform: rotate(-135deg);
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    border-right: 1px solid rgb(0, 0, 0, 0.1);
    background-color: #fff;
    margin-top: -7px;
    top: 0;
  }`
        : ""
    }
`}
`;

const Container = styled.div`
  display: inline;
  margin-top: 1.2rem;
  position: relative;
  background-color: white;
`;

const Span = styled.span`
  text-transform: capitalize;
  font-weight: 600;
`;

const OuterContainer = styled.span`
  margin-right: 1rem;
`;

const ItemSelectComponent = (params) => {
  // option - selected dropdown value
  // order - sortby desc or asc
  const { option, setOption, setCurrentPage, order, setOrder, value } = params;
  const [isSelect, setIsSelect] = useState(false);
  const optionRef = useRef(null);
  const onSelectClick = useCallback(() => {
    // set focus at dropdown instead of buttom
    optionRef?.current?.focus();
    setIsSelect((isSelect) => !isSelect);
  }, []);

  // Close option dropdown
  const setClose = useCallback(() => {
    setIsSelect(false);
  }, []);

  // Set option filter
  const handleSelectOption = useCallback(
    (option) => {
      setOption(option);
      setIsSelect(false);
      setCurrentPage(1);
      setOrder(ordering.ASC);
    },
    [setOption, setCurrentPage, setOrder]
  );

  // Render Option list
  const renderOption = useMemo(() => {
    if (value.lenght < 0) return;
    return value.map((option, index) => (
      <Option
        key={`option_${option}_${index}`}
        onClick={() => handleSelectOption(option)}
      >
        {option}
      </Option>
    ));
  }, [handleSelectOption, value]);

  // Handle sort by DESC or ASC
  const handleSetOrder = useCallback(() => {
    setOrder((order) => {
      if (order === ordering.ASC) {
        return ordering.DES;
      }
      return ordering.ASC;
    });
  }, [setOrder]);

  return (
    <OuterContainer>
      <Container>
        <Select onClick={onSelectClick} data-testid="select-btn">
          Order by: <Span>{option}</Span>
          <RotateArrow
            degree={order === ordering.ASC ? "225" : "45"}
            onClick={handleSetOrder}
          />
        </Select>
        <OptionList
          ref={optionRef}
          tabIndex={0}
          onBlur={setClose}
          isSelect={isSelect}
        >
          {isSelect ? renderOption : ""}
        </OptionList>
      </Container>
    </OuterContainer>
  );
};

export default React.memo(ItemSelectComponent);

ItemSelectComponent.propTypes = {
  value: PropTypes.array.isRequired,
  option: PropTypes.string,
  setOption: PropTypes.func,
  setCurrentPage: PropTypes.func,
  order: PropTypes.string,
  setOrder: PropTypes.func,
};
