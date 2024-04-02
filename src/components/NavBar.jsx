// imports here
import { Link, useNavigate } from "react-router-dom";
const NavBar = ({ token, setToken }) => {
  // logic here
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };
  return (
    <nav>
      <div>
        <h1>Navigations</h1>
      </div>
      <div className="link">
        <Link to="/">Products</Link>

        {token ? (
          <>
            <Link to="/cart">Cart</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
