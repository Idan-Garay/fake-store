import { useState, useEffect } from "react"

let localCache = []

export default function useCartsList(cart) {
  const [cartList, setCartList] = useState([])
  const [status, setStatus] = useState("unloaded")
  
  useEffect(() => {
    const abort = new AbortController()
    if (localCache.length) {
      setCartList(localCache)
    } else {
      requestCartList()
    }
  
    async function requestCartList() {
      console.log('requesting')
      setCartList([])
      setStatus('loading')
  
      const res = await fetch('https://fakestoreapi.com/carts', abort.signal)
      const json = await res.json()
      
      localCache = json || []
      setCartList(localCache)
      setStatus('loaded')
    }

    return () => abort.abort()
  }, [cart])

  return [cartList, status]
}