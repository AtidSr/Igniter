import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardViewComponent from "./cardView";

describe("Testing Card Container", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <CardViewComponent />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
  });
});
