import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftContent = styled.h1`
  font-size: 70px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
`;
const FrontPageComponent = () => {
  return (
    <PageContainer>
      <LeftContent>Iginter</LeftContent>
    </PageContainer>
  );
};

export default FrontPageComponent;
