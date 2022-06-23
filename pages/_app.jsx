import "../styles/globals.css";
import Layout from "../components/layout";
import { createContext } from "react";

export const FakeStoreContext = createContext();
const state = {
  carts: [],
  selectedCartId: -1,
  products: [],
  changeCart: (cartId) => {
    selectedCartId = cartId;
  },
  addProduct: (product) => {
    const cart = carts[selectedCartId];
    const prod = cart.products.find((cartP) => product.id === cartP.productId);
    if (idx) prod.quantity += 1;
    else cart.products.push({ productId: prod.id, quantity: 1 });
  },
  subtractProduct: (product) => {
    const cart = carts[selectedCartId];
    const prodIdx = cart.products.findIndex(
      (cartP) => product.id === cartP.productId
    );
    if (prodIdx) {
      cart.products[prodIdx].quantity -= 1;
      if (cart.products[prodIdx].quantity === 0)
        cart.products.splice(prodIdx, 1);
    }
  },
  set initializeFakeStore(state) {
    this.carts = state.carts;
    this.products = state.products;
    this.selectedCartId = state.selectedCartId;
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <FakeStoreContext.Provider value={state}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FakeStoreContext.Provider>
  );
}

export default MyApp;
