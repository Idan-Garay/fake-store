import { useContext } from "react";
import Product, { productDefaultValue, ProductType } from "./product";

interface ProductGalleryProps {
  category: string
  products: Array<ProductType>
}

export default function ProductGallery({ category, products }: ProductGalleryProps) {
  console.log(products)
  const filteredProducts: Array<ProductType> = products.length > 0 ? products.filter((prod) => products.filter((prod) => category.toLowerCase() === "all" || prod.category.toLowerCase() === category.toLowerCase())) : Array<ProductType>(10).fill(productDefaultValue)
  console.log()
  return (
    <section className="overflow-scroll h-full py-2 w-full text-gray-700  overflow-y-auto">
      <div className=" min-h-full max-w-full grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
        {filteredProducts.map((prod, index) => (<Product key={`prod-${index}`} {...prod} />))}
      </div>
    </section>
  );
}
