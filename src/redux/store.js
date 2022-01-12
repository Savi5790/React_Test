import allReducers from "./combineReducers";
import { createStore } from "redux";

const store = createStore(allReducers);
export default store;
