import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {
    // extra reducers for
    builder
      .addCase(getStore.pending, (state, action) => {
        // addCases are for actions created by async thunks.
        state.status = "loading";
      })
      .addCase(getStore.fulfilled, (state, action) => {
        (state.status = "succeeded"),
          (state.products = state.products.concat(action.payload));
      });
    // .addCase(fetchPosts.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error  = action.error.message;
    // })
  },
});

export const getStore = createAsyncThunk("store/all", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  // api returns a json of array products;
  return response.json();
});

export const { getProducts, changeCategory, changeStatus, setProducts } =
  storeSlice.actions;

export default storeSlice.reducer;
