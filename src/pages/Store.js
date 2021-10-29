import React, { useState, useEffect, useCallback } from "react";
import Categories from "../components/Categories";
import Results from "../components/Results";
import ProductDetail from "../components/ProductDetail";
import CartDetail from "../components/CartDetail";
import { Route } from "react-router-dom";
import useProductsList from "../productsCache.js";

const Store = () => {
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const savedCategory = useCallback(() => category, [category]);
  const [productsCache] = useProductsList([]);

  const handleClickCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    if (!products.length) {
      setProducts(productsCache);
      setLoaded(true);
    } else {
      if (category.toLowerCase() === "all") {
        console.log(productsCache);
        setProducts(productsCache);
      } else {
        setProducts(
          productsCache.filter((product) => {
            return product.category === category.toLowerCase();
          })
        );
      }
    }
    return () => new AbortController().abort();
  }, [savedCategory]);

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
