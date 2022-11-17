import { createSlice } from "@reduxjs/toolkit";

const initialState = { showBasket: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showBasket(state) {
      state.showBasket = !state.showBasket;
    },
  },
});

export default uiSlice.reducer;

export const { showBasket } = uiSlice.actions;
