// imports here
import { useNavigate } from "react-router";
import "./CheckoutButton.css";

const CheckoutButton = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;
