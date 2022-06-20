export default function Cart(props) {
  const date = props.date || "2020-10-10";
  const products = props.products || [];

  return (
    <div className=" cursor-pointer hover:bg-zinc-600/25">
      <div className=" flex flex-row nowrap gap-5 p-5 border justify-center items-center border-indigo-300/25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <div className="h-auto">
          <h2 className="">{new Date(date).toDateString()}</h2>
          <div className="flex flex-row flex-nowrap gap-5">
            <p>
              <span className="text-zinc-400">Total: </span>{" "}
              {products.reduce((prev, curr) => curr.quantity + prev, 0)}
            </p>
            <p>
              <span className="text-zinc-400">Unique: </span> {products.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
