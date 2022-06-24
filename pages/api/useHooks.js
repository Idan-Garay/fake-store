import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useCarts() {
  const { data: carts, error } = useSWR(
    "https://fakestoreapi.com/carts",
    fetcher
  );
  const [cartId, setCartId] = useState(5);

  return {
    cartId,
    setCartId,
    carts,
    isLoading: !error && !carts,
    isError: error,
  };
}
