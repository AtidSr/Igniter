import React from "react";
import HeaderComponent from "./header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Testing Header", () => {
  it("renders without crashing", () => {
    const onChange = jest.fn();
    const { baseElement } = render(
      <BrowserRouter>
        <HeaderComponent
          inputValue={""}
          onChange={onChange}
          isLoading={false}
          searchResult={[]}
        />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
    expect(screen.getByText("Iginter")).toHaveTextContent("Iginter");
  });
});
