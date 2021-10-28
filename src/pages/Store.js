import React from "react";
import Categories from "../components/Categories";
import Results from "../components/Results";

const Store = ({ handleClick, handleAddToCart, loaded, products }) => {
  return (
    <div>
      <Categories handleClick={handleClick} />
      <Results
        handleAddToCart={handleAddToCart}
        loaded={loaded}
        products={products}
      />
    </div>
  );
};

export default Store;
