import React from "react";
import styled from "styled-components";
import SpinnerComponent from "../components/spinner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const LoadingPageComponent = () => {
  return (
    <Container>
      <SpinnerComponent />
    </Container>
  );
};

export default LoadingPageComponent;
