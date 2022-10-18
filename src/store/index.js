import { compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composeEnchancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer,
  undefined,
  composedEnhancers,
});
