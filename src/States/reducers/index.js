import { combineReducers } from "redux";
import changeTheNumber from "./upDown";
import changeStatus from "./trueFalse";

const rootReducer = combineReducers({
  changeTheNumber,
  changeStatus,
});

export default rootReducer;
