import { combineReducers } from "redux";
import gameSearchReducer from "./reducer/gameSearchReducer";

import gameListReducer from "./reducer/reducer";

const rootReducer = combineReducers({
  gameReducer: gameListReducer,
  searchReducer: gameSearchReducer,
});

export default rootReducer;
