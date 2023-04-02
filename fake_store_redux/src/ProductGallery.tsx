import Product, { ProductType } from "./Product";

interface ProductGalleryProps {
  products: Array<ProductType>
}

export default function ProductGallery({ products }: ProductGalleryProps) {
  return (
    <section className="overflow-scroll h-full py-2 w-full text-gray-700  overflow-y-auto">
      <div className=" min-h-full max-w-full grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
        {products.map((prod) => (<Product key={`prod-${prod.id}`} product={prod} />))}
      </div>
    </section>
  );
}
