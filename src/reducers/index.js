import { combineReducers } from "redux";
import auth from "./auth";
import kroo from "./kroo";
import message from "./message";
import user from "./user";

export default combineReducers({
  auth,
  kroo,
  message,
  user,
});
