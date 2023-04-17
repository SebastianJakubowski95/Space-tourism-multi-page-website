import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexName: "MOON",
};

const planetNavigation = createSlice({
  name: "planetNavigation",
  initialState,
  reducers: {
    switch(state, action) {
      state.indexName = action.payload;
    },
  },
});
export const planetNavigationActions = planetNavigation.actions;
export default planetNavigation;
