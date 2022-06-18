import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Tabs({ handleClick }) {
  const { data, error } = useSWR(
    "https://fakestoreapi.com/products/categories",
    fetcher
  );

  if (error) return <>Failed to load</>;
  if (!data) return <>Loading...</>;

  return (
    <ul Name="flex flex-wrap text-sm font-medium text-center border-b border-gray-200 dark:border-gray-700">
      {data.map((category, idx) => (
        <li
          className=" mr-2 inline-block"
          role="presentation"
          key={"categories-" + idx}
        >
          {idx === 0 ? (
            <button
              onClick={() => handleClick(category)}
              className="capitalize inline-block p-4 text-indigo-600  bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            >
              {category}
            </button>
          ) : (
            <button
              onClick={() => handleClick(category)}
              className="capitalize inline-block p-4 rounded-t-lg hover:text-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              {category}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
