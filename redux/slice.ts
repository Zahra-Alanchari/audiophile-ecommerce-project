import { createSlice } from "@reduxjs/toolkit";

import { fetchgetAllJobs } from "./action";

const initialState = {
  job: [],
  id: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllJobs.fulfilled, (state, action) => {
      state.job = action.payload;
    });
  },
});

export const { updateSelectedId } = jobSlice.actions;
export default jobSlice.reducer;
