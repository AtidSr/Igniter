import React from "react";
import FrontPageComponent from "./FrontPage";
import { render } from "@testing-library/react";

describe("Testing Landing page", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<FrontPageComponent />);
    expect(baseElement).toBeInTheDocument();
  });
});
