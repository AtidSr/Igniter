import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

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
  position: absolute;
  right: 9px;
  top: 13px;
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

const orderFilter = [
  "name",
  "released",
  "added",
  "created",
  "updated",
  "rating",
  "metacritic",
];

const ItemSelectComponent = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [option, setOption] = useState(orderFilter[0]);
  const optionRef = useRef(null);
  const onSelectClick = useCallback(() => {
    optionRef.current.focus();
    setIsSelect((isSelect) => !isSelect);
  }, []);

  // Close option dropdown
  const setClose = useCallback(() => {
    setIsSelect(false);
  }, []);

  // Set option filter
  const handleSelectOption = useCallback((option) => {
    setOption(option);
    setIsSelect(false);
  }, []);

  // Render Option list
  const renderOption = () => {
    return orderFilter.map((option, index) => (
      <Option
        key={`option_${option}_${index}`}
        onClick={() => handleSelectOption(option)}
      >
        {option}
      </Option>
    ));
  };

  return (
    <Container>
      <Select onClick={onSelectClick}>
        Ordery by: <Span>{option}</Span> <Arrow />
      </Select>
      <OptionList ref={optionRef} tabIndex={0} onBlur={setClose}>
        {isSelect ? renderOption() : ""}
      </OptionList>
    </Container>
  );
};

export default React.memo(ItemSelectComponent);
