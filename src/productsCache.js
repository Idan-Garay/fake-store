import { useState, useEffect } from "react";

let localProductsCache = [];

export default function useProductsList(products) {
  const [productsList, setProductsList] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    const abort = new AbortController();
    if (localProductsCache.length) {
      setProductsList(localProductsCache);
    } else {
      requestProductsList();
    }

    async function requestProductsList() {
      console.log("requesting");
      setProductsList([]);
      setStatus("loading");

      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();

      localProductsCache = json || [];
      setProductsList(localProductsCache);
      setStatus("loaded");
    }

    return () => abort.abort();
  }, [products]);

  return [productsList, status];
}
