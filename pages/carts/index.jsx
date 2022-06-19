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
      <div className="w-3/5 border border-indigo-300/25"></div>
    </div>
  );
}
