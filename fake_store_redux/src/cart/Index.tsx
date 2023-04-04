
import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import CartInvoice from './CartInvoice'
import { RootState } from '../app/store'
import CartProduct from './CartProduct'
import { handleSelectAllItems } from '../features/Cart/cartSlice'


const CartPage = () => {
  const cartState = useAppSelector((state: RootState) => state.cart)
  const dispatch = useAppDispatch()

  const onSelectAllItems = () => {
    dispatch(handleSelectAllItems())
  }

  return (
    <main className="h-full w-full flex px-5 pt-3 gap-x-6">
      <section className="left_products w-8/12 flex flex-col ">
        <div className="my_cart text-xl h-[4rem] border pl-9 flex items-center">My Cart</div>
        <div className="choose_cart text-xl h-[3.5rem] border-b pl-3 flex items-center gap-x-3">
          <input type="checkbox" name="" id="all_products" checked={cartState.selectedAll} onChange={onSelectAllItems} />
          <label htmlFor="all_products">Choose All Product</label>
        </div>
        {
          cartState.items.map((item) => <CartProduct key={`cartProduct-${item.product.id}`} cartProduct={item} />)
        }
      </section>
      <section className="right_invoice self-start flex flex-col w-4/12 h-5/6 border">
        <CartInvoice items={cartState.items.filter(item => item.selected)} />
      </section>
    </main>
  )
}

export default CartPage