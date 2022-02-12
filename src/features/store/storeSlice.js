import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loaded: false,
  category: "All",
};

export const storeSlice = createSlice({
  name: "fakeStore",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.products = state.products.filter(
        (prod) => prod.category === state.category
      );
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeStatus: (state, action) => {
      state.loaded = action.payload;
    },
  },
});

export const { getProducts, changeCategory, changeStatus, setProducts } =
  storeSlice.actions;

export default storeSlice.reducer;
