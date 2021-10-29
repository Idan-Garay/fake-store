import React, { createContext, useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Carts from "./pages/Carts";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ErrorFallBack from "./components/ErrorFallBack";
import Navbar from "./components/Navbar";

const types = {
  AddProduct: "ADD PRODUCT",
  DelProduct: "DELETE PRODUCT",
  ChangeCart: "CHANGE CART",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.AddProduct: {
      let product = action.value;
      const idx = state.products.findIndex((p) => p.id === product.id);
      if (idx === -1) {
        product.qty = 1;
      } else {
        product = state.products[idx];
        product.qty++;
      }
      return { ...state, products: [...state.products, product] };
    }
    case types.DelProduct: {
      let product = action.value;

      const idx = state.products.findIndex((p) => p.id === product.id);
      if (idx !== -1) {
        state.products[idx].qty--;
      }
      return {
        ...state,
        products: [...state.products.filter((p) => p.qty !== 0)],
      };
    }
    case types.ChangeCart: 
      return {...action.value};
    
  }
};

export const CartContext = createContext({
  cartId: "0",
  products: [],
  quantity: 0,
  totalPrice: 0,
});

const App = () => {
  const cartVal = JSON.parse(localStorage.getItem("cart"));
  const [cart, dispatch] = useReducer(reducer, cartVal);

  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 border-dotted">
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <CartContext.Provider value={{ cart, dispatch }}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/store">
              <Store />
            </Route>
            <Route exact path="/carts">
              <Carts />
            </Route>
          </Switch>
        </CartContext.Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
