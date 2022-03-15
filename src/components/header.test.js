import React from "react";
import HeaderComponent from "./header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Testing Header", () => {
  it("renders without crashing", () => {
    const onChange = jest.fn();
    const { baseElement } = render(
      <BrowserRouter>
        <HeaderComponent
          inputValue={""}
          setInput={jest.fn()}
          onChange={onChange}
          isLoading={false}
          searchResult={[]}
        />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
    expect(screen.getByText("Iginter")).toHaveTextContent("Iginter");
  });

  it("Should able to type input", () => {
    const onChange = jest.fn();
    render(
      <BrowserRouter>
        <HeaderComponent
          inputValue={""}
          setInput={jest.fn()}
          onChange={onChange}
          isLoading={false}
          searchResult={[]}
        />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Good Day" },
    });
    expect(onChange).toBeCalled();
  });

  it("Should able to display result", () => {
    const mock = [
      {
        name: "TEST",
      },
    ];
    const onChange = jest.fn();
    render(
      <BrowserRouter>
        <HeaderComponent
          inputValue={""}
          setInput={jest.fn()}
          onChange={onChange}
          isLoading={false}
          searchResult={mock}
        />
      </BrowserRouter>
    );
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
