import { useState, useEffect } from "react";

export let localCartCache = [];

export default function useCartsList() {
  const [cartList, setCartList] = useState([]);
  const [status, setStatus] = useState(localCartCache ? "loaded" : "unloaded");

  useEffect(() => {
    const abort = new AbortController();
    if (localCartCache.length) {
      setCartList(localCartCache);
    } else {
      requestCartList();
    }

    async function requestCartList() {
      setCartList([]);
      setStatus("loading");

      const res = await fetch("https://fakestoreapi.com/carts", abort.signal);
      const json = await res.json();

      localCartCache = json || [];
      setCartList(localCartCache);
      setStatus("loaded");
    }

    return () => abort.abort();
  }, []);

  return [cartList, status];
}
