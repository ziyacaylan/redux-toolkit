import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/card/cartSlice";

export const store = configureStore({
  reducer: {
    name: cartReducer,
  },
});
