import React from "react";
import { render } from "@testing-library/react";
import SpinnerComponent from "./spinner";

describe("Testing Spinner", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<SpinnerComponent />);
    expect(baseElement).toBeInTheDocument();
  });
});
