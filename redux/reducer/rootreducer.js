import { combineReducers } from "redux";
import homeReducers from "./homereducer";

const rootReducer = combineReducers({
  home: homeReducers,
});

export default rootReducer;
