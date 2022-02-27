import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardViewComponent from "../components/cardView";
import HeaderComponent from "../components/header";
import { fetchGame } from "../store/action/api/fetchGame";

// Delay 100 milliseconds then execute callBack function
const timeout = (callBack) => {
  setTimeout(callBack, 100);
};

const SearchPageComponent = () => {
  const { gameList } = useSelector((state) => state.gameReducer);

  console.log(gameList);
  useEffect(() => {
    timeout(fetchGame);
  }, []);

  return (
    <>
      <HeaderComponent />
      <CardViewComponent />
    </>
  );
};

export default SearchPageComponent;
