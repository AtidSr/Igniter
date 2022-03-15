import React from "react";
import { BrowserRouter } from "react-router-dom";
import mock from "../api/mock/mockSetup";
import data from "../api/mock/mock.json";
import { ENDPOINT_SEARCH } from "../api/endpoint";
import { render, screen } from "../utils/test-util";
import PageIndexComponent from "./pageIndex";

describe("Testing Page index", () => {
  beforeAll(() => {
    mock.setUpMock(ENDPOINT_SEARCH, data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <PageIndexComponent />
      </BrowserRouter>
    );
    expect(screen.getByTestId("page-index")).toBeInTheDocument();
  });

  it("Should render header", () => {
    render(
      <BrowserRouter>
        <PageIndexComponent />
      </BrowserRouter>
    );
    expect(screen.getByText("Iginter")).toBeInTheDocument();
  });
});
