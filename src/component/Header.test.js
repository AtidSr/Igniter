import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Testing Header", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
    expect(screen.getByText("Iginter")).toHaveTextContent("Iginter");
  });
});
