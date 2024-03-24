import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, NavBar } from "./components";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));

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
        <Route path="/" element={<h1>Hello, World</h1>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </div>
  );
};

export default App;
