import useSWR from "swr";
import { fetcher } from "../pages/api/fetcher";

export default function Categories() {
  const { data, error } = useSWR(
    "https://fakestoreapi.com/products/categories",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <aside className="w-full">
      <ul>
        {data.map((category, idx) => (
          <li key={`cat-${idx}`}>{category}</li>
        ))}
      </ul>
    </aside>
  );
}
