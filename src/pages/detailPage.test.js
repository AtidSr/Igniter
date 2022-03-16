import React from "react";
import mock from "../api/mock/mockSetup";
import data from "../api/mock/getDetail.json";
import { ENDPOINT_SEARCH } from "../api/endpoint";
import { render, screen } from "../utils/test-util";
import DetailPageComponent from "./detailPage";

describe("Testing Landing page", () => {
  beforeAll(() => {
    mock.setUpMock(`${ENDPOINT_SEARCH}/${"test"}`, data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing and should render game detail", () => {
    const preloadState = {
      gameReducer: {
        gameList: [],
        count: 0,
        isLoading: false,
        gameDetail: data,
      },
      searchReducer: { searchResult: [], isLoading: false },
    };

    render(<DetailPageComponent />, preloadState);
    expect(screen.getByTestId("detail-page")).toBeInTheDocument();
    expect(screen.getByText("Grand Theft Auto V")).toBeInTheDocument();
  });
});
