import React from "react";
import CardComponent from "./card";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Testing Card", () => {
  const mock = {
    background_image: "img_link",
    name: "TEST",
    slug: "test",
    clip: { clip: "" },
  };
  it("renders without crashing", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <CardComponent game={mock} />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
  });
});
