import React from "react";
import SearchPageComponent from "./searchPage";
import { BrowserRouter } from "react-router-dom";
import mock from "../api/mock/mockSetup";
import data from "../api/mock/mock.json";
import { ENDPOINT_SEARCH } from "../api/endpoint";
import { render, screen } from "../utils/test-util";

describe("Testing Landing page", () => {
  beforeAll(() => {
    mock.setUpMock(ENDPOINT_SEARCH, data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SearchPageComponent />
      </BrowserRouter>
    );
    expect(screen.getByTestId("search_page_component")).toBeInTheDocument();
  });
});
