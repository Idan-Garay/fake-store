import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loaded: false,
  category: "all",
};

export const storeSlice = createSlice({
  name: "fakeStore",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = state.products.filter(
        (prod) => prod.category === action.payload
      );
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeStatus: (state, action) => {
      state.loaded = action.payload;
    },
  },
});

export const { getProducts, changeCategory, changeStatus } = storeSlice.actions;

export default storeSlice.reducer;
