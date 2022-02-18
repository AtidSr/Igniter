import React from "react";
import CardComponent from "./Card";
import { render } from "@testing-library/react";

describe("Testing Card", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<CardComponent />);
    expect(baseElement).toBeInTheDocument();
  });
});
