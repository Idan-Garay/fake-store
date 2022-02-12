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
} from "../features/store/storeSlice";
import { useSelector, useDispatch } from "react-redux";

const Store = () => {
  // const [loaded, setLoaded] = useState(false);
  // const [category, setCategory] = useState("all");
  // const [products, setProducts] = useState([]);
  const { products, loaded, category } = useSelector((state) => state.store);
  let [productsCache] = useProductsList(category);
  const dispatch = useDispatch();

  const handleClickCategory = (e) => {
    dispatch(changeCategory(e.target.value));
    dispatch(getProducts());
    dispatch(changeStatus(true));
  };

  useEffect(() => {
    //   setProducts(productsCache);
    //   setLoaded(true);
    dispatch(changeStatus(false));
    dispatch(setProducts(productsCache));
    dispatch(changeStatus(true));
    return () => new AbortController().abort();
  }, [productsCache]);
  console.log(category, products, loaded);
  return (
    <div>
      <Categories handleClick={handleClickCategory} />
      <Results loaded={loaded} products={products} />
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
