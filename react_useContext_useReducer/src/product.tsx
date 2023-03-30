import React, { useContext } from "react"
import { CartContext, CartDispatchContext } from "../context/CartContext"
import { Cart, CartProductType } from "../context/CartContext"

export type ProductType = {
  id: string
  title: string
  price: number
  category: string
  description: string
  image: string
}

export const productDefaultValue: ProductType = {
  id: "id1",
  title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  price: 599,
  image: "#",
  description: "description 1",
  category: "all"
}

interface ProductProps {
  product: ProductType
}

export const addProduct = (product: ProductType, items: Array<CartProductType>, dispatch: React.Dispatch<Partial<Cart>>) => {
  const index = items.findIndex(item => item.product.id === product.id)
  const newItems = [...items]

  if (index === -1) {
    newItems.push({ product: product, qty: 1 })
  } else {
    newItems[index].qty++
  }

  const newTotalQty: number = items.reduce((prev: number, currItem: CartProductType) => currItem.qty + prev, 0)
  const newAmount: number = items.reduce((prev: number, currItem: CartProductType) => currItem.product.price * currItem.qty + prev, 0)
  console.log(newAmount, newTotalQty)
  dispatch({
    items: newItems,
    totalQty: newTotalQty,
    amount: parseFloat(newAmount.toFixed(2))
  })
};

export default function Product({ product }: ProductProps) {
  const dispatch = useContext(CartDispatchContext) as React.Dispatch<Partial<Cart>>
  const cartState = useContext(CartContext)
  const pName =
    product.title || "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport";
  const price = product.price || 599;
  const pImg = product.image || "#";

  return (
    <div className="min-h-[20rem] min-w-[18rem] h-32 w-full flex flex-wrap relative">
      <img src={pImg} alt="product_image" className="h-full w-full bg-white object-contain p-3" />
      <div className=" opacity-0 hover:opacity-100 hover:bg-zinc-800/25 duration-300 absolute inset-0 z-10 flex justify-center items-end">
        <div className="cursor-pointer h-2/6 w-full text-white flex-col p-1">
          <h4 className="h-2/6 truncate">{pName}</h4>
          <div className="flex flex-nowrap justify-between h-4/6">
            <h6>${price.toFixed(2)}</h6>
            <button
              onClick={() => {
                addProduct(product, [...cartState.items] as Array<CartProductType>, dispatch);
              }}
              className="self-start h-full w-1/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full p-1 rounded-full"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
