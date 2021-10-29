import React, { useContext } from "react";
import Cart from "../components/Cart";
import useCartList from "../cartCache";
import { CartContext } from "../App";

const Carts = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [cartList] = useCartList(cart);

  const selectCart = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
    dispatch({ type: "CHANGE CART", value: cartData });
  };

  return (
    <div className="flex flex-wrap">
      {!cartList.length ? (
        <p>Loading...</p>
      ) : (
        cartList.map((data) => (
          <Cart
            key={`cart-${data.id}-${data.userId}`}
            handleUse={() => {
              selectCart(data);
            }}
            cart={data}
          />
        ))
      )}
    </div>
  );
};

export default Carts;
