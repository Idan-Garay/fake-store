import { useState, useCallback, useEffect, useContext } from "react";
import ProductGallery from "../components/productGallery";
import Tabs from "../components/tabs";
import { FakeStoreContext } from "./_app";

const Home = ({ staticCarts, staticProducts, staticCategories }) => {
  const [category, setCategory] = useState("all");
  const handleTabClick = useCallback((cat) => setCategory(cat), []);

  return (
    <div className="flex flex-col min-h-screen justify-center px-2 ">
      <Tabs
        category={category}
        handleClick={handleTabClick}
        categories={staticCategories}
      />
      <ProductGallery category={category} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/carts");
  const res3 = await fetch("https://fakestoreapi.com/products/categories");

  const staticCarts = await res.json();
  const staticCategories = await res3.json();

  return { props: { staticCarts, staticCategories } };
}

export default Home;
