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
  Payment,
} from "./components";
import { getAllProducts } from "./API";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const navigate = useNavigate();

  const handlePaymentSubmit = (formData) => {
    console.log("Payment submitted:", formData);

    //Navigate to confirmation page
    navigate("/confirmation");
  };

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
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token, user, cart]);

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
        <Route
          path="/payment"
          element={<Payment onSubmit={handlePaymentSubmit} />}
        />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
};

export default App;
