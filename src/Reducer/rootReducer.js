import { combineReducers } from "redux";
import { Reducer } from "./Reducer";
import { apiReducer } from "./Reducer";
import { updateApiReducer } from "./Reducer";

const rootReducer = combineReducers({
  cart: Reducer,
  user: apiReducer,
  update: updateApiReducer,
});

export default rootReducer;
 