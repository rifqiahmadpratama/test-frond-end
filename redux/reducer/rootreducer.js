import { combineReducers } from "redux";
import homeReducers from "./homereducer";
import repoReducer from "./reporeduces";

const rootReducer = combineReducers({
  home: homeReducers,
  repo: repoReducer,
});

export default rootReducer;
