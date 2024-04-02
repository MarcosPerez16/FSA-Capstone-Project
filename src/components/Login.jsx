// imports here
import { useState } from "react";
import { loginUser, getAllUsers, getUserCart } from "../API";
import { useNavigate } from "react-router";
const Login = ({ setToken, setUser, setCart }) => {
  // logic here

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser(username, password);
    const user = await getAllUsers(username);
    const usersCart = await getUserCart(user.id);
    setToken(token);
    setUser(user);
    setCart(usersCart);
    setPassword("");
    setUsername("");
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
