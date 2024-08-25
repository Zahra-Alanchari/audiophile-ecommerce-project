import { createSlice } from "@reduxjs/toolkit";

import { fetchgetAllJobs } from "./action";

const initialState = {
  job: [],
  id: null,
  headphone: 0,
  earphone: 0,
  speaker: 0,
  cart: 0
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
    headphoneCount(state, action) {
      state.headphone = action.payload;
    },
    earphoneCount(state, action) {
      state.earphone = action.payload;
    },
    speakerCount(state, action) {
      state.speaker = action.payload;
    },
    sumCard(state, action) {
      state.cart += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllJobs.fulfilled, (state, action) => {
      state.job = action.payload;
    });
  },
});

export const { updateSelectedId,headphoneCount,earphoneCount,speakerCount,sumCard } = jobSlice.actions;
export default jobSlice.reducer;
