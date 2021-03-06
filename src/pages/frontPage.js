import React from "react";
import styled from "styled-components";
import joystick from "../asset/joystick.png";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const PageHeader = styled.h1`
  font-size: 9rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  margin-bottom: 3rem;
`;

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: inline-block;
  margin-top: 2.2rem;
  width: 16.25rem;
`;

const Image = styled.img`
  width: 55%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background: #06f;
  color: #fff;
  box-shadow: rgb(255 255 255 / 0%) 0 0 0 3px, rgb(0 102 255 / 0%) 0 0 0 4px;
  border-radius: 10px;
  padding: 0.8rem 1.6rem;
  width: 100%;
  display: inherit;
  text-align: center;
  font-weight: 900;
  margin-top: 3rem;

  &:hover,
  &:focus {
    background: #005ce6;
  }
`;

const TextSpan = styled.span`
  text-transform: uppercase;
  color: #06f;
  font-weight: 600;
`;

const TextContent = styled.div`
  position: relative;
  margin: 0.625rem 1rem;
`;
const NameParagraph = styled.div`
  position: absolute;
  right: 0;
  padding-top: 1rem;
  &::before {
    content: "—";
  }
`;
const FrontPageComponent = () => {
  return (
    <PageContainer>
      <HeaderContainer>
        <ContentGroup>
          <PageHeader>Iginter</PageHeader>
          <TextContent>
            <p>
              I don't need to <TextSpan> get a life. </TextSpan> I'm a gamer. I
              have
              <TextSpan> lots </TextSpan>
              of lives!
            </p>
            <NameParagraph>Random internet gamer</NameParagraph>
          </TextContent>
          <BtnContainer>
            <StyledLink to={"/browse"}>Start Browsing Now !!!</StyledLink>
          </BtnContainer>
        </ContentGroup>
      </HeaderContainer>
      <Image src={joystick}></Image>
    </PageContainer>
  );
};

export default FrontPageComponent;
