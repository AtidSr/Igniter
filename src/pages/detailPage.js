import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getGameDetailApi } from "../api/getDetail";
import {
  clearGameDetailAction,
  setDetailAction,
} from "../store/action/actions";
import { gameDetailSelector } from "../store/selector/selector";
import { timeout } from "../utils/timeout";

const HeaderSection = styled.div`
  width: 100%;
  height: 45vh;
  background-image: ${(props) => `url(${props.background})`};
  background-attachment: fixed;
  background-size: contain;
  background-color: #0066ff;
  background-blend-mode: luminosity;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadingText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: "900";
  text-transform: uppercase;
  color: #fff;
  font-size: 3rem;
`;

const DetailPageComponent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const gameDetail = useSelector(gameDetailSelector);
  const getGameDetail = useCallback(
    async (slug) => {
      const response = await getGameDetailApi(slug);
      dispatch(setDetailAction(response.data));
    },
    [dispatch]
  );

  useEffect(() => {
    timeout(() => getGameDetail(params.slug));

    return () => {
      dispatch(clearGameDetailAction());
    };
  }, [dispatch, getGameDetail, params]);

  return (
    <div data-testid="detail-page">
      <HeaderSection background={gameDetail.background_image}>
        <HeadingText>{gameDetail.name}</HeadingText>
      </HeaderSection>
    </div>
  );
};

export default DetailPageComponent;
