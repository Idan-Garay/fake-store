import Cart from "../../components/cart";

export default function Index() {
  //paginate
  return (
    <div className="h-screen flex flex-row flex-nowrap p-10 font-thin capitalize">
      <div className="w-2/5 flex flex-col flex-nowrap gap-3">
        <h1 className=" font-medium text-xl mb-4">Selected Cart:</h1>
        <div className="flex flex-col flex-nowrap gap-3 ml-10">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
      <div className="w-3/5 border border-indigo-300/25 gap-3 p-10">
        <div className="flex flex-row flex-nowrap justify-between items-center">
          <h2 className="font-medium text-xl">Your order</h2>
          <button className="border border-indigo-300/25 px-5 py-2 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            Edit
          </button>
        </div>
        <div className=" h-3/6"></div>
        <div className="total border-y h-2/6">
          <div></div>
          <div></div>
        </div>
        <div className="buttons h-1/6 flex flex-row flex-nowrap justify-end items-center">
          <button className="border border-indigo-300/25 px-5 py-2 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
