import { configureStore } from "@reduxjs/toolkit";

//* Reducers *// 
import uiSlice from "./UI-Slice";
import BasketSlice from "./Basket-Slice";

const store = configureStore({
  reducer: {ui: uiSlice, basket: BasketSlice}
})

export default store;