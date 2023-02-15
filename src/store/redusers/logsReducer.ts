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
    addLog: (state: LogState, action: PayloadAction<Log[]>) => {
      action.payload.map((log) => {
        state.logs.push(log);
        state.queryCount++;
        state.metricsCount.select += log.sql.split(/SELECT/i).length - 1;
        state.metricsCount.where += log.sql.split(/WHERE/i).length - 1;
        state.metricsCount.leftJoin += log.sql.split(/JOIN/i).length - 1;
      });
    },
    addResultCount: (state: LogState, action: PayloadAction<number>) => {
      state.resultCount += action.payload + 1;
    },
  },
});

export default logsSlice.reducer;
