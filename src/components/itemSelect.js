import React, { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ordering } from "../types/order";

const Select = styled.button`
  border: none;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
  padding: 0.625rem 1.6rem 0.625rem 1rem;
  font-size: inherit;
  border-radius: 5px;
  background-color: white;
  position: relative;
  cursor: pointer;
  width: 25%;

  &:focus,
  &:hover {
    opacity: 0.7;
  }
`;

const Arrow = styled.i`
  border: solid rgb(0, 0, 0, 0.5);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
`;

const InnerArrow = styled(Arrow)`
  position: absolute;
  right: 9px;
  top: 13px;
`;

const RotateArrow = styled(Arrow)`
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  ${(props) => `transform: rotate(${props.degree}deg)`}
`;

const Option = styled.li`
  padding: 0.625rem 1rem;
  text-indent: 1.3rem;
  text-transform: capitalize;

  &:hover {
    background: rgb(0, 0, 0, 0.1);
  }
`;

const OptionList = styled.ul`
  width: 15%;
  background: #fff;
  box-shadow: 0 0 5px rgb(0, 0, 0, 0.1);
  position: absolute;
  margin-top: 0.6rem;
  border-radius: 5px;
  list-style-type: none;
  overflow: hidden;
`;

const Container = styled.div`
  margin-top: 1.2rem;
`;

const Span = styled.span`
  text-transform: capitalize;
  font-weight: 600;
`;

const ItemSelectComponent = (params) => {
  // option - selected dropdown value
  // order - sortby desc or asc
  const { option, setOption, setCurrentPage, order, setOrder, value } = params;
  const [isSelect, setIsSelect] = useState(false);
  const optionRef = useRef(null);
  const onSelectClick = useCallback(() => {
    // set focus at dropdown instead of buttom
    optionRef.current.focus();
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
    <>
      <Container>
        <Select onClick={onSelectClick} data-testid="select-btn">
          Order by: <Span>{option}</Span> <InnerArrow />
        </Select>
        <OptionList ref={optionRef} tabIndex={0} onBlur={setClose}>
          {isSelect ? renderOption : ""}
        </OptionList>
        <RotateArrow
          degree={order === ordering.ASC ? "225" : "45"}
          onClick={handleSetOrder}
        />
      </Container>
    </>
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
