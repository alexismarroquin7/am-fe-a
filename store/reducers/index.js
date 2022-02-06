import { combineReducers } from "redux";
import { navReducer } from "./nav-reducer";

export const rootReducer = combineReducers({
  nav: navReducer
});