import React from "react";
import FrontPageComponent from "./component/pages/FrontPage";
import GlobalStyled from "./GlobalStyled";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <GlobalStyled />
        <Route path="/" element={<FrontPageComponent />} />
        <Route path="/browse" element={<FrontPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
