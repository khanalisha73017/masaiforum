import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as postRedux } from "./postRedux/reducer";

import { reducer as authuser } from "./authuser/reducer";

const rootReducer = combineReducers({
  postRedux,
  authuser,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
