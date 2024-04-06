// imports here
import { useNavigate } from "react-router";
const CheckoutButton = () => {
  // logic here
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CheckoutButton;
