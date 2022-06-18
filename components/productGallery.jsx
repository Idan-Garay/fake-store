import useSWR from "swr";
import { fetcher } from "../pages/api/fetcher";
import Product from "./product";
import grid from "../styles/grid.module.css";
import Image from "next/image";

export default function ProductGallery({ category }) {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section class="overflow-scroll border-white w-full border-2 text-gray-700 ">
      <div class={`${grid.gallery}`}>
        {data.map((prod, index) => (
          <Product key={`prod-${index}`} {...prod} />
        ))}
      </div>
    </section>
  );
}
