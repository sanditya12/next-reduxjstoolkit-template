import { configureStore, combineReducers } from "@reduxjs/toolkit";
import state1Slice from "./state1Slice";

export const Store = configureStore({
  reducer: combineReducers({
    state1: state1Slice,
  }),
});

export default { Store };
