import React from "react"

interface TabsProps {
  category: string
  handleClick: (category: string) => void
  categories: Array<string>
}

export default function Tabs({ category, handleClick, categories }: TabsProps) {
  return (
    <ul className="border mt-12 mx-5 pl-1 pb-1 border-t-0 border-l-0 border-r-0  flex flex-wrap text-sm font-medium text-center  dark:border-gray-700">
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
