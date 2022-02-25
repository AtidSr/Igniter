import React from "react";
import SearchPageComponent from "./searchPage";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Testing Landing page", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <SearchPageComponent />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
  });
});
