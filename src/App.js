import { React, useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ProductDetail from "./components/ProductDetail";
import Carts from "./pages/Carts";
import CartDetail from "./components/CartDetail";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ErrorFallBack from "./components/ErrorFallBack";
import Navbar from "./components/Navbar";

const App = () => {
  const cartVal = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(cartVal);
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const prevCategoryRef = useRef(category);

  const handleClick = (e) => {
    setCategory(e.target.value.toString().toLowerCase());
    setLoaded(false);
  };

  const handleAddToCart = (product) => {
    const carty = { ...cart };

    if (Object.entries(carty).length) {
      const index = carty.products.findIndex((element) => {
        return element.productId === product.id;
      });

      if (index !== -1) carty.products[index].quantity++;
      else carty.products.push({ productId: product.id, quantity: 1 });

      setCart(carty);
      localStorage.setItem("cart", JSON.stringify(carty));
    } else {
      alert("oops");
    }
  };

  // useEffect(() => {
  //   prevCategoryRef.current = category;
  // }, [category]);

  // const prevCategory = prevCategoryRef.current;

  // useEffect(() => {
  //   // let val = category === 'all' ? 'categories' : `category/${category}`
  //   if (!products.length || prevCategory !== category) {
  //     const url = `https://fakestoreapi.com/products/${
  //       category === "all" ? "" : `category/${category}`
  //     }`;
  //     fetch(url)
  //       .then(
  //         (res) => {
  //           const retVal = res.json();
  //           return retVal;
  //         },
  //         (error) => console.log(error)
  //       )
  //       .then(
  //         (json) => {
  //           setProducts(json);
  //           setLoaded(true);
  //         },
  //         (error) => console.log(error)
  //       );
  //   }
  // }, [category]);

  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 border-dotted">
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/store">
              <Store
                handleClick={handleClick}
                handleAddToCart={handleAddToCart}
                loaded={loaded}
                products={products}
              />
            </Route>
            <Route exact path="/carts">
              <Carts setCart={setCart} />
            </Route>

            <Route exact path="/store/:id">
              <ProductDetail />
            </Route>

            <Route exact path="/carts/:cartId">
              <CartDetail />
            </Route>
          </Switch>
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
