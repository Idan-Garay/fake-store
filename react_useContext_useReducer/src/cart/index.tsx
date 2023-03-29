import React from 'react'
import CartInvoice from './CartInvoice';
import CartProduct from './CartProduct';

const CartPage = () => {
  return (
    <main className="h-full w-full flex px-5 pt-3 gap-x-6">
      <section className="left_products w-8/12 flex flex-col ">
        <div className="my_cart text-xl h-[4rem] border pl-9 flex items-center">My Cart</div>

        <div className="choose_cart text-xl h-[3.5rem] border-b pl-3 flex items-center gap-x-3">
          <input type="checkbox" name="" id="all_products" />
          <label htmlFor="all_products">Choose All Product</label>
        </div>

        <CartProduct/>
      </section>

      <section className="right_invoice self-start flex flex-col w-4/12 h-5/6 border">
        <CartInvoice/>
      </section>
    </main>
  )
}

export default CartPage