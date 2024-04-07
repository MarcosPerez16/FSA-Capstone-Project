//   //remember we need to add some sort of dummy payment method in here we arent using a backend
//   //when the user clicks on purchase in this page they should be directed to a confirmation page, we made a component for that already
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

const CheckoutPage = ({ cart, products }) => {
  const navigate = useNavigate();
  const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);

  const handleReturnToCart = () => {
    navigate("/cart");
  };

  const handlePaymentSubmit = (formData) => {
    console.log("Payment submitted:", formData);

    setIsPaymentSubmitted(true);
  };

  //Use useEffect to navigate to confirmation page after payment is submitted
  useEffect(() => {
    if (isPaymentSubmitted) {
      navigate("/confirmation");
    }
  }, [isPaymentSubmitted, navigate]);

  return (
    <div>
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
            <div key={index}>
              <img
                className="card-image"
                src={product.image}
                alt={product.title}
              />
              <p>{product.title}</p>
              <p>${product.price.toFixed(2)}</p>
              <p>{product.category}</p>
              <p>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
              <p>Quantity: {item.quantity}</p>
              <p>{product.description}</p>
            </div>
          );
        } else {
          // Handle the case where the product is not found
          return <p key={index}>Product not found</p>;
        }
      })}
      <div>
        <button onClick={handleReturnToCart}>Return To Cart</button>
      </div>
      <div>
        <Payment onSubmit={handlePaymentSubmit} />
      </div>
    </div>
  );
};

export default CheckoutPage;
