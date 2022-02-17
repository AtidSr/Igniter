import { combineReducers } from "redux";

import counterReducer from "./reducer/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
