import { useContext } from "react";
import Product, { productDefaultValue, ProductType } from "./product";

interface ProductGalleryProps {
  category: string
  products: Array<ProductType>
}

export default function ProductGallery({ category, products }: ProductGalleryProps) {
  return (
    <section className="overflow-scroll h-full py-2 w-full text-gray-700  overflow-y-auto">
      <div className=" min-h-full max-w-full grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
        {products.map((prod, index) => (<Product key={`prod-${index}`} {...prod} />))}
      </div>
    </section>
  );
}
