import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getGameDetailApi } from "../api/getDetail";
import {
  clearGameDetailAction,
  setDetailAction,
  setLoadingStatus,
} from "../store/action/actions";
import {
  gameDetailSelector,
  isLoadingSelector,
} from "../store/selector/selector";
import { timeout } from "../utils/timeout";
import playstation from "../asset/playstation.svg";
import xbox from "../asset/xbox.svg";
import steam from "../asset/steam.svg";
import nintendo from "../asset/nintendo.png";
import LoadingPageComponent from "./loadingPage";

const HeaderSection = styled.div`
  width: 100%;
  height: 45vh;
  background-image: ${(props) => `url(${props.background})`};
  background-attachment: fixed;
  background-size: cover;
  background-color: #0066ff45;
  background-blend-mode: luminosity;
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

const GameDetailContainer = styled.div`
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  background-color: #f7f7f8;
  padding: 6rem 0;
  margin-top: -7rem;
`;

const DetailContainer = styled.div`
  width: 55%;
  margin: 3rem auto;
  position: relative;
`;
const InfoSection = styled.div`
  width: 100%;
`;

const InfoContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
`;

const InnerInfoContainer = styled(InfoContainer)`
  margin: 0 0 0 auto;
  width: 50%;
  padding: 0;
`;

const DescriptionText = styled.div`
  line-height: 200%;
  margin: 2rem 0;
`;

const Icon = styled.img`
  display: inline-block;
  margin: 0.4rem;
  height: 3rem;
`;

const PlatformIcon = styled.div`
  position: absolute;
  margin-top: -4rem;
  right: 0;
  top: 0;
`;

const DetailPageComponent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const gameDetail = useSelector(gameDetailSelector);
  const isLoading = useSelector(isLoadingSelector);

  // get detail function
  const getGameDetail = useCallback(
    async (slug) => {
      dispatch(setLoadingStatus(true));
      const response = await getGameDetailApi(slug);
      dispatch(setDetailAction(response.data));
      dispatch(setLoadingStatus(false));
    },
    [dispatch]
  );

  // fetch detail when landing
  useEffect(() => {
    timeout(() => getGameDetail(params.slug));

    return () => {
      dispatch(clearGameDetailAction());
    };
  }, [dispatch, getGameDetail, params]);

  // Return icon
  const getPlatformIcon = useCallback((key) => {
    switch (key) {
      case "pc":
        return <Icon src={steam} key={`pc`} />;
      case "xbox":
        return <Icon src={xbox} key={`xbox`} />;
      case "nintendo":
        return <Icon src={nintendo} key={`nintendo`} />;
      case "playstation":
        return <Icon src={playstation} key={`playstation`} />;
      default:
        break;
    }
  }, []);

  // return spinner when loading
  if (isLoading) {
    return <LoadingPageComponent />;
  }

  // return flagment when no game detail
  if (Object.keys(gameDetail).length === 0) {
    return <></>;
  }

  return (
    <div data-testid="detail-page">
      <HeaderSection background={gameDetail?.background_image}>
        <HeadingText>{gameDetail?.name}</HeadingText>
      </HeaderSection>

      <InfoSection>
        <GameDetailContainer>
          <DetailContainer>
            <PlatformIcon>
              {gameDetail?.parent_platforms?.map((detail, index) =>
                getPlatformIcon(detail.platform.slug, index)
              )}
            </PlatformIcon>
            <InfoContainer>
              <h3>Metascore : {gameDetail.metacritic || " - "}</h3>
            </InfoContainer>

            <InfoContainer>
              <h3>
                Genre :
                {gameDetail.genres.length > 0
                  ? gameDetail.genres.map((detail, index) => {
                      if (gameDetail?.genres?.length - 1 === index) {
                        return ` ${detail?.name}`;
                      }
                      return ` ${detail?.name} ,`;
                    })
                  : " - "}
              </h3>
              <InnerInfoContainer>
                <h3>Release date : {gameDetail.released || " - "}</h3>
              </InnerInfoContainer>
            </InfoContainer>
            <InfoContainer>
              <h3>
                Developer :
                {gameDetail?.developers
                  ? gameDetail?.developers?.map((detail, index) => {
                      if (gameDetail?.developers?.length - 1 === index) {
                        return ` ${detail?.name}`;
                      }
                      return ` ${detail?.name} ,`;
                    })
                  : " - "}
              </h3>

              <InnerInfoContainer>
                <h3>
                  Publisher :
                  {gameDetail?.publishers?.length > 0
                    ? gameDetail?.publishers?.map((detail, index) => {
                        if (gameDetail?.publishers?.length - 1 === index) {
                          return ` ${detail?.name}`;
                        }
                        return ` ${detail?.name} ,`;
                      })
                    : " - "}
                </h3>
              </InnerInfoContainer>
            </InfoContainer>
            <InfoContainer>
              <h3>Age rating : {gameDetail?.esrb_rating?.name || " - "}</h3>
            </InfoContainer>
            <DescriptionText
              dangerouslySetInnerHTML={{ __html: gameDetail.description }}
            ></DescriptionText>
          </DetailContainer>
        </GameDetailContainer>
      </InfoSection>
    </div>
  );
};

export default DetailPageComponent;
// Developer
// Publisher
// Age rating
