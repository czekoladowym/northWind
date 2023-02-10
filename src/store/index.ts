import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logsReducer from "./redusers/logsReducer";

const rootReducer = combineReducers({ logs: logsReducer });
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
