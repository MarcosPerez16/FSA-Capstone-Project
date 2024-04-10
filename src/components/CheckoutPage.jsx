import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = ({ cart, products }) => {
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  const handleReturnToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout Page</h2>
      <h3>Cart Items:</h3>
      {cart.map((item, index) => {
        // Find the product object based on the productId
        const product = products.find(
          (product) => product.id === item.productId
        );

        // Ensure the product is found before rendering
        if (product) {
          return (
            <div key={index} className="cart-item">
              <img
                className="cart-item-image"
                src={product.image}
                alt={product.title}
              />
              <div className="cart-item-details">
                <p className="cart-item-title">{product.title}</p>
                <p className="cart-item-price">${product.price.toFixed(2)}</p>
                <p className="cart-item-category">{product.category}</p>
                <p className="cart-item-rating">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <p className="cart-item-description">{product.description}</p>
              </div>
            </div>
          );
        } else {
          // Handle the case where the product is not found
          return <p key={index}>Product not found</p>;
        }
      })}
      <div className="button-container">
        <button className="return-to-cart-button" onClick={handleReturnToCart}>
          Return To Cart
        </button>
        <button
          className="proceed-to-payment-button"
          onClick={handleProceedToPayment}
        >
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
