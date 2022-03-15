// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "../store/reducer/reducer";
import gameSearchReducer from "../store/reducer/gameSearchReducer";

// const render = (
//   ui,
//   {
//     preloadedState,
//     store = configureStore({
//       reducer: { gameReducer: reducer, searchReducer: gameSearchReducer },
//       preloadedState,
//     }),
//     ...renderOptions
//   } = {}
// ) => {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
// };

const render = (ui, preloadedState, ...renderOptions) => {
  const store = configureStore({
    reducer: { gameReducer: reducer, searchReducer: gameSearchReducer },
    preloadedState,
  });

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
