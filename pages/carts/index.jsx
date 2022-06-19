import { useSelector } from "react-redux";
import useSWR from "swr";
import Cart from "../../components/cart";
import CartProduct from "../../components/cartProduct";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcherArr = (...urls) => {
  const f = (url) => fetch(url).then((res) => res.json());
  return Promise.all(urls.map(f));
};

export default function Index() {
  const cart = useSelector((state) => state.cart);
  const { data, error } = useSWR(
    cart.products.map(
      (product) => "https://fakestoreapi.com/products/" + product.productId
    ),
    fetcherArr
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
        <div className=" h-3/6 flex flex-row flex-nowrap gap-3 justify-center">
          {data.map((prod) => (
            <CartProduct key={"cartProd-" + prod.id} {...prod} />
          ))}
        </div>
        <div className="total border-y h-2/6 py-4 flex flex-row flex-nowrap justify-between">
          <div className="w-1/2 px-2 py-1"></div>
          <div className="w-1/2  px-2 py-1 flex justify-end">
            <ul className="w-5/6  ">
              <li className="flex flex-row flex-nowrap justify-between">
                <span className="text-zinc-400">Total qty. : </span>
                <span>20</span>
              </li>
              <li className="flex flex-row flex-nowrap justify-between">
                <span className="text-zinc-400">Unique items: </span>
                <span>20</span>
              </li>
              <li className="flex flex-row flex-nowrap justify-between text-lg mt-1">
                <span className="">Total: </span>
                <span className="font-semibold">20 </span>
              </li>
            </ul>
          </div>
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
