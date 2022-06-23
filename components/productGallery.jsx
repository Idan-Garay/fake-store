import { useContext } from "react";
import useSWR from "swr";
import { FakeStoreContext } from "../pages/_app";
import grid from "../styles/grid.module.css";
import Product from "./product";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductGallery({ category }) {
  const { data: products, error } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (error) return <>Failed to load data</>;
  if (!products) return <>Loading data... </>;

  return (
    <section className="overflow-scroll w-full text-gray-700 ">
      <div className={`${grid.gallery}`}>
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
