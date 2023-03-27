import React from 'react'

const CartPage = () => {
  return (
    <main className="h-full w-full border-4 flex px-4 gap-x-6">
      <section className="left_products w-8/12 border border-red-600 flex flex-col ">
        <div className="my_cart h-[5rem] border">My Cart</div>

        <div className="choose_cart h-[3rem] border">
          <input type="checkbox" name="" id="" />Choose All Product
        </div>

        <div className="products h-[15rem] border"></div>
      </section>

      <section className="right_invoice self-start flex flex-col w-4/12 h-5/6 border border-blue-600">
        <div className="border h-2/6">Order Summary</div>
        <div className="border h-1/6">Delivery Today with</div>
        <div className="border h-1/6">Amount + Tax</div>
        <div className="border h-2/6 flex flex-col">
          <div className="border h-1/3">Order Total</div>
          <div className="border h-2/3 flex flex-col  place-content-end gap-y-3">
            <button>Add Coupon Code Here</button>
            <button>Checkout</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CartPage