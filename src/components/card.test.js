import React from "react";
import CardComponent from "./card";
import { render } from "@testing-library/react";

describe("Testing Card", () => {
  const mock = {
    background_image: "img_link",
    name: "TEST",
  };
  it("renders without crashing", () => {
    const { baseElement } = render(<CardComponent game={mock} />);
    expect(baseElement).toBeInTheDocument();
  });
});
