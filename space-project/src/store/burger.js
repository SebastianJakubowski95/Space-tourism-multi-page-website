import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const burgerMenu = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    close(state) {
      state.isOpen = false;
    },
    open(state) {
      state.isOpen = true;
    },
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const burgerActions = burgerMenu.actions;
export default burgerMenu;
