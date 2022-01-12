import { combineReducers } from "redux";
import SearchReducer from "../views/searchPage/reducer/searchReducer";

let allReducers = combineReducers({
  SearchArray: SearchReducer,
});
export default allReducers;
