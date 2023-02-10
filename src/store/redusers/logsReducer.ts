import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface sharpMetrics {
  select: number;
  where: number;
  leftJoin: number;
}

export type Log = {
  sql: string;
  date: string;
  requestTime: string;
};

export type LogState = {
  queryCount: number;
  resultCount: number;
  metricsCount: sharpMetrics;
  logs: Log[];
};

const initialState: LogState = {
  queryCount: 0,
  resultCount: 0,
  metricsCount: {
    select: 0,
    where: 0,
    leftJoin: 0,
  },
  logs: [],
};

export const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    addLog: (state: LogState, action: PayloadAction<Log>) => {
      state.logs.push(action.payload);
      state.queryCount++;
      state.metricsCount.select +=
        action.payload.sql.split(/select/i).length - 1;
      state.metricsCount.where += action.payload.sql.split(/where/i).length - 1;
      state.metricsCount.leftJoin +=
        action.payload.sql.split(/join/i).length - 1;
    },
    addResultCount: (state: LogState, action: PayloadAction<number>) => {
      state.resultCount += action.payload;
    },
  },
});

export default logsSlice.reducer;
