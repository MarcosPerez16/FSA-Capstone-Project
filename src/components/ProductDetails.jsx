import React from "react";
import "./card.css";
import { useNavigate } from "react-router";

const ProductDetails = ({ product, isSingle, cart, setCart, token }) => {
  const navigate = useNavigate();

  const handleViewItemClick = () => {
    navigate(`/${product.id}`);
  };

  const handleAddToCart = () => {
    if (token) {
      const productId = product.id;
      // Check if the product already exists in the cart
      const existingCartItem = cart.find(
        (item) => item.productId === productId
      );

      if (existingCartItem) {
        // If the product exists, increase its quantity by 1
        const updatedCart = cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
      } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        setCart((prevCart) => [...prevCart, { productId, quantity: 1 }]);
      }
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">${product.price.toFixed(2)}</p>
        <p>{product.category}</p>
        <p>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
        {token && ( // Render the button only if the user is logged in
          <button className="card-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
        {!isSingle && (
          <button onClick={handleViewItemClick} className="view-item-button">
            View Item
          </button>
        )}
        {isSingle && <p className="card-description">{product.description}</p>}
      </div>
    </div>
  );
};

export default ProductDetails;
