import React, { useEffect } from "react";
import { FrontPageComponent, SearchPageComponent } from "./pages";
import GlobalStyled from "./GlobalStyled";
import { Routes, Route } from "react-router-dom";
import setUpEnvironment from "./environment";

function App() {
  useEffect(() => {
    setUpEnvironment();
  }, []);

  return (
    <div className="App">
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<FrontPageComponent />} />
        <Route path="/browse" element={<SearchPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
