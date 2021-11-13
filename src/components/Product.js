import { Link } from "react-router-dom";

import { CartContext } from "../App";
import { useContext } from "react";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const { id, title, price, image } = product;

  const addToCart = () => {
    dispatch({ type: "ADD PRODUCT", value: product });
  };

  return (
    <div className="product w-3/12 shadow-md mt-5 ml-5">
      <div className="flex-auto p-6">
        <Link to={`/store/${id}`}>
          <div className="prod-img h-50 w-100 bg-black overflow-hidden">
            <img
              src={image}
              alt="prodImg"
              className="object-contain h-48 w-full"
            />
          </div>
          <h1 className="flex-auto text-xl font-semibold truncate">{title}</h1>
          <div className="text-xl font-semibold text-gray-500 mb-2 mt-1">
            ${price}
          </div>
        </Link>
        <div className="flex-auto flex space-x-3">
          <button
            className="w-1/2 flex items-center justify-center rounded-md bg-blue-500 text-white"
            type="submit"
          >
            Buy now
          </button>
          <button
            onClick={addToCart}
            className="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
