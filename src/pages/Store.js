import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Results from "../components/Results";
import ProductDetail from "../components/ProductDetail";
import CartDetail from "../components/CartDetail";
import { Route } from "react-router-dom";
import useProductsList from "../productsCache.js";
import {
  getProducts,
  changeCategory,
  changeStatus,
  setProducts,
  getStore,
} from "../features/store/storeSlice";
import { useSelector, useDispatch } from "react-redux";

const Store = () => {
  const { products, category } = useSelector((state) => state.store);
  // let [productsCache] = useProductsList(category);
  const dispatch = useDispatch();

  const handleClickCategory = (e) => {
    dispatch(changeCategory(e.target.value));
    dispatch(getProducts());
    dispatch(changeStatus(true));
  };

  useEffect(() => {
    //   setProducts(productsCache);
    //   setLoaded(true);

    if (products.length === 0) dispatch(getStore()); // returns {type, payload} via createAsyncThunk

    // dispatch(changeStatus(false));
    // dispatch(setProducts(productsCache));
    // dispatch(changeStatus(true));
    return () => new AbortController().abort();
  }, [products.length, dispatch]); // products.length for now since status is yet to be implemented
  // console.log(category, products, loaded);
  return (
    <div>
      <Categories handleClick={handleClickCategory} />
      <Results products={products} />
      <Route exact path="/store/:id">
        <ProductDetail />
      </Route>

      <Route exact path="/carts/:cartId">
        <CartDetail />
      </Route>
    </div>
  );
};

export default Store;
