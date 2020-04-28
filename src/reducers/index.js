import { combineReducers } from "redux";
import auth from "./auth";
import kroo from "./kroo";

export default combineReducers({
  auth,
  kroo,
});
