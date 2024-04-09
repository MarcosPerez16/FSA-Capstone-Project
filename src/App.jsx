import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  NavBar,
  AllProducts,
  SingleProduct,
  Cart,
  CheckoutPage,
  ConfirmationPage,
} from "./components";
import { getAllProducts } from "./API";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart" || []))
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user" || null))
  );

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const cartArr = JSON.stringify(cart);
      localStorage.setItem("cart", cartArr);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route
          path="/"
          element={
            <AllProducts
              products={products}
              cart={cart}
              setCart={setCart}
              token={token}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login setToken={setToken} setUser={setUser} setCart={setCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              products={products}
              setCart={setCart}
              token={token}
            />
          }
        />
        <Route
          path="/:productId"
          element={
            <SingleProduct cart={cart} setCart={setCart} token={token} />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} products={products} />}
        />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
};

export default App;
