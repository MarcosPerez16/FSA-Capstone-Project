import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, NavBar, AllProducts, SingleProduct } from "./components";
import { getAllProducts } from "./API";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  const [products, setProducts] = useState([]);

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
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<AllProducts products={products} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default App;
