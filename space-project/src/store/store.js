import { configureStore } from "@reduxjs/toolkit";
import burgerMenu from "./burger";
import planetNavigation from "./planetNavigation";

export const store = configureStore({
  reducer: {
    menu: burgerMenu.reducer,
    planetNavigation: planetNavigation.reducer,
  },
});
