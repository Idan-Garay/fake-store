import { useState, useCallback } from "react";
import useSWR from "swr";
import Categories from "../components/categories";
import ProductGallery from "../components/productGallery";
import Tabs from "../components/tabs";

const Home = () => {
  const [category, setCategory] = useState("all");
  const handleTabClick = useCallback((cat) => setCategory(cat), []);

  return (
    <div className="flex flex-col min-h-screen justify-center px-2 ">
      <Tabs handleClick={handleTabClick} />
      <ProductGallery category={category} />
    </div>
  );
};

export default Home;
