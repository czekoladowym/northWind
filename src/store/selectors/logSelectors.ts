import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

const logsFilter = (state: RootState) => state.logs;
const resultsFilter = (state: RootState) => state.logs.resultCount;

export const logsSelector = createSelector(logsFilter, (logs) => logs);
export const resultsSelector = createSelector(
  resultsFilter,
  (results) => results
);
