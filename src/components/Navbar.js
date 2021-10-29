import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartNotif from "./CartNotif";
import { CartContext } from "../App";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <ul className="flex">
        <li className="mr-3">
          <Link
            to="/"
            className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
          >
            Home
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/store"
            className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
          >
            Store
          </Link>
        </li>
        <li className="mr-3">
          <Link
            to="/carts"
            className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
          >
            Carts
          </Link>
        </li>
        <div className="flex-auto justify-end">
          <li className="w-20 h-20">
            {cart ? (
              <>
                <CartNotif id={cart.id} qty={cart.products.length} />
                <h4>{`cart-${cart.id}`}</h4>
              </>
            ) : null}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
