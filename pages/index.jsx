import useSWR from "swr";
import Categories from "../components/categories";
import ProductGallery from "../components/productGallery";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-row justify-center px-2 ">
      <ProductGallery />
    </div>
  );
};

export default Home;
