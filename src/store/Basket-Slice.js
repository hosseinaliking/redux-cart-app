import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalItems: 0, totalPrice: 0 };

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      const itemExist = state.items.find((item) => item.id === action.payload.id);

      if (itemExist) {
        itemExist.amount++;
        itemExist.totalPrice = itemExist.totalPrice + itemExist.price;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          amount: 1,
          totalPrice: action.payload.price, 
        });
      }
    },

    removeItem(state, action) {
      const itemExist = state.items.find(item => item.id === action.payload.id);

      if (itemExist.amount === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
      } else {
        itemExist.amount--;
        itemExist.totalPrice = itemExist.totalPrice - itemExist.price
      }
    }
  },
});

export default BasketSlice.reducer;

export const { addItem, removeItem } = BasketSlice.actions;
