export default function Tabs({ category, handleClick, categories }) {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center border-b border-gray-200 dark:border-gray-700">
      <li
        className=" mr-2 inline-block"
        role="presentation"
        key={"categories--1"}
      >
        <button
          onClick={() => handleClick("all")}
          className={`capitalize inline-block p-4  rounded-t-lg ${
            "all" === category
              ? "text-indigo-600  bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
              : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          } `}
        >
          all
        </button>
      </li>
      {categories.map((cat, idx) => (
        <li
          className=" mr-2 inline-block"
          role="presentation"
          key={"categories-" + idx}
        >
          <button
            onClick={() => handleClick(cat)}
            className={`${
              cat === category
                ? "text-indigo-600  bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            } capitalize inline-block p-4 active:bg-gray-100 rounded-t-lg `}
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  );
}
