import { useState, useEffect } from "react";

export let localProductsCache = [];

export default function useProductsList(category) {
  const [productsList, setProductsList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    const abort = new AbortController();
    if (localProductsCache.length > 0) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      category = category.toLowerCase();
      if (category === "all") {
        setProductsList(localProductsCache);
      } else {
        setProductsList(
          localProductsCache.filter((p) => p.category === category)
        );
      }
    } else {
      requestProductsList();
    }

    async function requestProductsList() {
      setProductsList([]);
      setStatus("loading");

      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();

      localProductsCache = json || [];
      setProductsList(localProductsCache);
      setStatus("loaded");
    }

    return () => abort.abort();
  }, [category]);

  return [productsList, status];
}
