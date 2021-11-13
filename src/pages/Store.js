import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Results from "../components/Results";
import ProductDetail from "../components/ProductDetail";
import CartDetail from "../components/CartDetail";
import { Route } from "react-router-dom";
import useProductsList from "../productsCache.js";

const Store = () => {
  const [loaded, setLoaded] = useState(false);
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  let [productsCache] = useProductsList(category);

  const handleClickCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    setProducts(productsCache);
    setLoaded(true);
    return () => new AbortController().abort();
  }, [productsCache]);

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
