import React from "react";
import { render } from "../utils/test-util";
import LoadingPageComponent from "./loadingPage";

describe("Testing Loading Page", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<LoadingPageComponent />);
    expect(baseElement).toBeInTheDocument();
  });
});
