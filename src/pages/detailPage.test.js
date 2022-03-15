import React from "react";
import { BrowserRouter } from "react-router-dom";
import mock from "../api/mock/mockSetup";
import data from "../api/mock/mock.json";
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

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <DetailPageComponent />
      </BrowserRouter>
    );
    expect(screen.getByTestId("detail-page")).toBeInTheDocument();
  });
});
