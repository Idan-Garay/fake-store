import useSWR from "swr";
import Categories from "../components/categories";
import ProductGallery from "../components/productGallery";
import Tabs from "../components/tabs";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center px-2 ">
      <Tabs />
      <ProductGallery />
    </div>
  );
};

export default Home;
