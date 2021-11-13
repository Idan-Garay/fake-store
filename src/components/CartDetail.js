import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../App";

const CartDetail = () => {
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [status] = useState("idle");
  console.log("hello", cart);
  useEffect(() => {
    const controller = new AbortController();

    const requestProduct = async (prodID) => {
      const fetchedProduct = await fetch(
        `https://fakestoreapi.com/products/${prodID}`
      );
      const json = fetchedProduct.json();
      return json;
    };
    let newProductsList = cart.products.map((product) => {
      const newProd = requestProduct(product.productId);
      newProd.quantity = product.quantity;
      newProd.totalPrice = product.quantity * newProd.price;
      return newProd;
    });

    setProducts(newProductsList);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {products.length ? (
        <div className="h-2/3 w-2/3 mx-auto p-5 bg-blue-500">
          {products.map((p) => {
            return (
              <div
                key={`p-${p.id}`}
                className=" bg-indigo-100 px-3 h-auto py-2 mb-2"
              >
                <div className=" flex justify-between">
                  <div className=" text-gray-700 font-semibold">
                    {p.title} {`p-${p.id}`}
                  </div>
                  <div className=" text-gray-700 font-semibold">x{p.qty}</div>
                </div>
                <p className=" text-right ">${p.price}</p>
              </div>
            );
          })}
          <div className=" shadow-xl bg-indigo-100 text-right">
            <h1>
              $
              {products.reduce(
                (accumulator, curr) => accumulator + curr.totalPrice,
                0
              )}
            </h1>
          </div>
        </div>
      ) : (
        <p>{status}</p>
      )}
    </div>
  );
};

export default CartDetail;
