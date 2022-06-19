import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: -1,
    userId: -1,
    date: "2022-01-01",
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const idx = state.products.findIndex((p) => p.id === product.id);
      if (idx) state.products[idx].quantity += 1;
      else state.products.push(product);
    },
    removeFromCart: (state, action) => {
      const { pid } = action.payload;
      state.products = state.products.filter((p) => p.id !== pid);
    },
    decrementQty: () => (state, action) => {
      const { pid } = action.payload;
      const idx = state.products.findIndex((p) => p.id === pid);
      if (idx) state.products[idx].quantity -= 1;
    },
    emptyCart: (state) => {
      state = {
        id: -1,
        userId: -1,
        date: "2022-01-01",
        products: [],
      };
    },
  },
});

export const { addToCart, removeFromCart, decrementQty, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
