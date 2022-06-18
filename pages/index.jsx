import Categories from "../components/categories";
import ProductGallery from "../components/productGallery";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center px-5 border-white border-2 gap-2">
      <div className="w-2/12 border-white border-2">
        <Categories />
      </div>
      <div className="w-10/12 border-white border-2">
        <ProductGallery />
      </div>
    </div>
  );
};

export default Home;
