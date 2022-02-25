import { combineReducers } from "redux";

import gameListReducer from "./reducer/reducer";

const rootReducer = combineReducers({
  gameReducer: gameListReducer,
});

export default rootReducer;
