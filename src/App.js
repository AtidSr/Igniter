import React, { useEffect } from "react";
import GlobalStyled from "./GlobalStyled";
import { Routes, Route } from "react-router-dom";
import setUpEnvironment from "./environment";
import { routePath } from "./appRoute";

function App() {
  useEffect(() => {
    // setup mock
    setUpEnvironment();
  }, []);

  return (
    <div className="App">
      <GlobalStyled />
      <Routes>
        {routePath.map((route, index) => (
          <Route
            path={route.path}
            element={route.getComponent()}
            key={`route_${index}`}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
