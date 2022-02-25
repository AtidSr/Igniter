import React from "react";
import FrontPageComponent from "./frontPage";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Testing Landing page", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <FrontPageComponent />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
  });
});
