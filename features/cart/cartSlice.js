import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: 5,
    userId: 3,
    date: "2020-03-01T00:00:02.000Z",
    products: [
      {
        productId: 7,
        quantity: 1,
      },
      {
        productId: 8,
        quantity: 1,
      },
    ],
    __v: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const cartProduct = state.products.find((p) => p.id === product.id);
      if (cartProduct) cartProduct.quantity += 1;
      else state.products.push(product);
    },
    removeFromCart: (state, action) => {
      const { pid } = action.payload;
      state.products = state.products.filter((p) => p.id !== pid);
    },
    decrementQty: () => (state, action) => {
      const { pid } = action.payload;
      const product = state.products.find((p) => p.id === pid);
      if (product) product.quantity -= 1;
    },
    emptyCart: (state) => {
      state.products = [];
    },
    initializeCart: (state, action) => {
      state = { ...action.payload };
    },
  },
});
export const selectLength = (state) => state.products.length;

export const {
  addToCart,
  removeFromCart,
  decrementQty,
  emptyCart,
  initializeCart,
} = cartSlice.actions;
export default cartSlice.reducer;
