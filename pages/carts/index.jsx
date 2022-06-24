import { useState } from "react";

import Cart from "../../components/cart";
import { useCarts } from "../api/useHooks";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function CartPaginate({ carts }) {
  return (
    <>
      {carts.map((cart) => (
        <Cart key={`cart-${cart.id}`} {...cart} />
      ))}
    </>
  );
}

export default function Index() {
  const [index, setIndex] = useState(3);
  const { carts, isLoading, isError } = useCarts();

  const handlePagination = (isNext = false) => {
    let val = index;

    if (isNext && val - cartData.length < 2) val += 3;
    else if (!isNext && val - 3 >= 3) val -= 3;
    setIndex(val);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="h-screen flex flex-row flex-nowrap p-10 font-thin capitalize">
      <div className="w-2/5 flex flex-col flex-nowrap gap-3">
        <h1 className=" font-medium text-xl mb-4">Selected Cart:</h1>
        <div className="flex flex-col items-center h-full w-5/6">
          <div className="h-3/6 flex flex-col gap-2 ">
            <CartPaginate carts={carts.slice(index - 3, index)} />
          </div>
          <div className="flex flex-row flex-nowrap gap-2 justify-center mt-5">
            <button
              className="border border-indigo-300/25 px-2"
              onClick={() => handlePagination(false)}
            >
              {"<"}
            </button>
            <span>
              {index - 2} to {index}
            </span>
            <button
              className="border border-indigo-300/25 px-2"
              onClick={() => handlePagination(true)}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/5 border border-indigo-300/25 gap-3 p-10">
        <div className="flex flex-row flex-nowrap justify-between items-center">
          <h2 className="font-medium text-xl">Your order</h2>
          <button className="border border-indigo-300/25 px-5 py-2 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            Edit
          </button>
        </div>
        <div className=" h-3/6 flex flex-row flex-nowrap gap-4 justify-start py-2">
          {/* {data.map((prod) => (
            <CartProduct key={"cartProd-" + prod.id} {...prod} />
          ))} */}
        </div>
        <div className="total border-y h-2/6 py-4 flex flex-row flex-nowrap justify-between">
          <div className="w-1/2 px-2 py-1"></div>
          <div className="w-1/2  px-2 py-1 flex justify-end">
            <ul className="w-5/6  ">
              <li className="flex flex-row flex-nowrap justify-between">
                <span className="text-zinc-400">Total qty. : </span>
                <span>
                  {/* {cart.products.reduce(
                    (prev, curr) => parseInt(curr.quantity) + prev,
                    0
                  )} */}
                </span>
              </li>
              <li className="flex flex-row flex-nowrap justify-between">
                <span className="text-zinc-400">Unique items: </span>
                {/* <span>{cart.products.length}</span> */}
              </li>
              <li className="flex flex-row flex-nowrap justify-between text-lg mt-1">
                <span className="">Total: </span>
                <span className="font-light">
                  {/* ${" "}
                  {cart.products.reduce(
                    (prev, curr, idx) =>
                      data[idx].price * parseInt(curr.quantity) + prev,
                    0
                  )} */}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons h-1/6 flex flex-row flex-nowrap justify-end items-center">
          <button
            // emptyCart
            onClick={() => {}}
            className="border border-indigo-300/25 px-5 py-2 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
