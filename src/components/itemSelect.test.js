import React from "react";
import { render } from "@testing-library/react";
import ItemSelectComponent from "./itemSelect";
describe("Testing Select Option", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<ItemSelectComponent />);
    expect(baseElement).toBeInTheDocument();
  });
});
