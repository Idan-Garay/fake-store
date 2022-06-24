import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useCarts() {
  const { data: cartsData, error } = useSWR(
    "https://fakestoreapi.com/carts",
    fetcher
  );
  const [cartId, setCartId] = useState(5);
  const [carts, setCarts] = useState(cartsData);

  useEffect(() => {
    setCarts(cartsData);
  }, [cartsData]);

  const addProduct = (product) => {
    const products = carts[cartId - 1].products;
    const idx = products.findIndex((prod) => prod.productId === product.id);

    if (idx !== -1) carts[cartId - 1].products[idx].quantity += 1;
    else {
      carts[cartId - 1].products.push({ productId: product.id, quantity: 1 });
    }
    setCarts([...carts]);
  };

  const placeOrder = () => {
    carts[cartId - 1].products = [];
    setCarts([...carts]);
  };

  return {
    cartId,
    setCartId,
    addProduct,
    placeOrder,
    carts,
    isLoading: !error && !carts,
    isError: error,
  };
}

export function useProducts() {
  const { data: products, pError } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  return { products, pIsLoading: !pError && !products, error: pError };
}
