import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ItemSelectComponent from "./itemSelect";
import { orderFilter } from "../types/order";
describe("Testing Select Option", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<ItemSelectComponent value={orderFilter} />);
    expect(baseElement).toBeInTheDocument();
  });

  it("Should be able to select and change option", () => {
    const setOption = jest.fn();
    const setCurrentPage = jest.fn();
    const setOrder = jest.fn();
    render(
      <ItemSelectComponent
        value={orderFilter}
        option=""
        setOption={setOption}
        setCurrentPage={setCurrentPage}
        order={""}
        setOrder={setOrder}
      />
    );
    fireEvent.click(screen.getByTestId("select-btn"));
    fireEvent.click(screen.getByText(orderFilter[0]));
    expect(setOption).toBeCalled();
    expect(setCurrentPage).toBeCalled();
  });
});
