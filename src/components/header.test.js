import React from "react";
import HeaderComponent from "./header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Testing Header", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
    expect(screen.getByText("Iginter")).toHaveTextContent("Iginter");
  });
});
