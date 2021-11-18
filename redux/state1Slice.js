import { createSlice } from "@reduxjs/toolkit";

const state1Slice = createSlice({
  name: "state1",
  initialState: {
    stateField: 0,
  },
  reducers: {
    setState1: (state, action) => {
      state.stateField = action.payload;
    },
    incrementState1: (state, action) => {
      state.stateField = state.stateField + 1;
    },
  },
});

export const { setState1, incrementState1 } = state1Slice.actions;
export const selectStateField = (state) => state.state1.stateField;

export default state1Slice.reducer;
