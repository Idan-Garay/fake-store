import React, { useContext, useReducer } from 'react'
import { CartContext } from '../App';
import { ProductType } from '../product';
import CartInvoice from './CartInvoice';
import CartProduct from './CartProduct';

export interface CartProductType {
  product: ProductType
  qty: number
}

export interface Cart {
  items: Array<CartProductType>
  totalQty: number
  amount: number
}

export const cartDefaultValue: Cart = {
  items: [],
  totalQty: 0,
  amount: 0,
}

export const useCart = () => {
  // a custom hook using useReducer
  return useReducer((current: Cart, update: Partial<Cart>) => ({
    ...current, ...update
  }), cartDefaultValue)
}

const CartPage = () => {
  const cartState = useContext(CartContext)

  return <main className="h-full w-full flex px-5 pt-3 gap-x-6">
    <section className="left_products w-8/12 flex flex-col ">
      <div className="my_cart text-xl h-[4rem] border pl-9 flex items-center">My Cart</div>

      <div className="choose_cart text-xl h-[3.5rem] border-b pl-3 flex items-center gap-x-3">
        <input type="checkbox" name="" id="all_products" />
        <label htmlFor="all_products">Choose All Product</label>
      </div>

      {
        cartState.items.map((item) => <CartProduct key={`cartProduct-${item.product.id}`} cartProduct={item} />)
      }
    </section>

    <section className="right_invoice self-start flex flex-col w-4/12 h-5/6 border">
      <CartInvoice />
    </section>
  </main>

}
export default CartPage