import { useContext } from "react";
import Product, { ProductType } from "./product";

interface ProductGalleryProps {
  category: string
}

export default function ProductGallery({ category }: ProductGalleryProps) {
  // const products = [global.storeProducts.products];
  const products: Array<ProductType> = [
    ...Array(10).fill(
      {
        id: "id1",
        title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        price: "$599",
        image: "#",
        description: "description 1",
        category: "all"
      },
    )
  ];

  if (!products) return <>Loading products...</>;

  return (
    <section className="overflow-scroll h-full py-2 w-full text-gray-700  overflow-y-auto">
      <div className=" min-h-full max-w-full grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
        {category === "all"
          ? products.map((prod, index) => (
            <Product key={`prod-${index}`} {...prod} />
          ))
          : products
            .filter((prod) => prod.category === category)
            .map((prod, index) => (
              <Product key={`prod-${index}`} {...prod} />
            ))}
      </div>
    </section>
  );
}
