import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "../pages/api/fetcher";
import Product from "./product";
import grid from "../styles/grid.module.css";
import Image from "next/image";

export default function ProductGallery({ category }) {
  const { cache } = useSWRConfig();
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section className="overflow-scroll w-full text-gray-700 ">
      <div className={`${grid.gallery}`}>
        {category === "all"
          ? data.map((prod, index) => (
              <Product key={`prod-${index}`} {...prod} />
            ))
          : data
              .filter((prod) => prod.category === category)
              .map((prod, index) => (
                <Product key={`prod-${index}`} {...prod} />
              ))}
      </div>
    </section>
  );
}
