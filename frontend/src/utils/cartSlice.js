import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          item.productId !== action.payload.productId ||
          item.size !== action.payload.size
      );
    },
    emptyItemsFromCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyItemsFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
