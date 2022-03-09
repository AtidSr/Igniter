import React from "react";
import { render, screen } from "@testing-library/react";
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

  it("Should render n time", () => {
    const gameList = [
      { name: "test", background_image: "img_link" },
      { name: "test", background_image: "img_link" },
      { name: "test", background_image: "img_link" },
      { name: "test", background_image: "img_link" },
    ];
    render(
      <BrowserRouter>
        <CardViewComponent gameList={gameList} />
      </BrowserRouter>
    );
    expect(screen.getAllByText("test").length).toEqual(4);
  });
});
