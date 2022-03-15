import React from "react";
import FrontPageComponent from "./frontPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { routePath } from "../appRoute";
import { render, screen } from "../utils/test-util";

describe("Testing Landing page", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <FrontPageComponent />
      </BrowserRouter>
    );
    expect(baseElement).toBeInTheDocument();
  });

  it("should render correctly", () => {
    render(
      <BrowserRouter>
        <FrontPageComponent />
      </BrowserRouter>
    );
    expect(screen.getByText("Random internet gamer")).toBeInTheDocument();
    expect(screen.getByText("Start Browsing Now !!!")).toBeInTheDocument();
  });

  it("should able to click and navigate", () => {
    render(
      <BrowserRouter>
        <Routes>
          {routePath.map((route, index) => (
            <Route
              path={route.path}
              element={route.getComponent()}
              key={`route_${index}`}
            />
          ))}
        </Routes>
      </BrowserRouter>
    );

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText("Start Browsing Now !!!"), leftClick);

    expect(screen.getByText("Order by:")).toBeInTheDocument();
  });
});
