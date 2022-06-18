import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Tabs() {
  const { data, error } = useSWR(
    "https://fakestoreapi.com/products/categories",
    fetcher
  );

  if (error) return <>Failed to load</>;
  if (!data) return <>Loading...</>;

  return (
    <ul Name="flex flex-wrap text-sm w-screen bg-slate-400 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {data.map((category, idx) => (
        <li
          className=" mr-2 inline-block"
          role="presentation"
          key={"categories-" + idx}
        >
          {idx === 0 ? (
            <button className="capitalize inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">
              {category}
            </button>
          ) : (
            <button className="capitalize inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
              {category}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
