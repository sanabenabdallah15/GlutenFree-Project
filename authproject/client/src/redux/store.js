import { rootReducer } from "./rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';

const enhancers = composeWithDevTools(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancers);