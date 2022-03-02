import React from "react";
import CardComponent from "./card";
import { render } from "@testing-library/react";

describe("Testing Card", () => {
  const mock = {
    background_image:
      "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    name: "TEST",
  };
  it("renders without crashing", () => {
    const { baseElement } = render(<CardComponent game={mock} />);
    expect(baseElement).toBeInTheDocument();
  });
});
