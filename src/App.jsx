import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token" || null));

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Hello, World</h1>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </div>
  );
};

export default App;
