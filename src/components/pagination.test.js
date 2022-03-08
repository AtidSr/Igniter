import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PaginationComponent from "./pagination";
describe("Testing Pagination", () => {
  it("Renders without crashing", () => {
    const pageSize = 20;
    const total = 100;

    const { baseElement } = render(
      <PaginationComponent
        currentPage={1}
        totalCount={total}
        pageSize={pageSize}
        onPageChange={jest.fn()}
      />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it("Should call onPageChange when click", () => {
    const pageSize = 20;
    const total = 100;
    const onPageChange = jest.fn();
    render(
      <PaginationComponent
        currentPage={1}
        totalCount={total}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    );
    fireEvent.click(screen.getByText("2"));
    expect(onPageChange).toBeCalled();
  });
});
