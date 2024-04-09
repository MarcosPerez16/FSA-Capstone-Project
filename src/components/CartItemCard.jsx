import React, { useState } from "react";
import "./CartItemCard.css";

const CartItemCard = ({ cartItem, quantity, updateQuantity, onDelete }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleIncrement = () => {
    setItemQuantity(itemQuantity + 1);
    updateQuantity(cartItem.id, itemQuantity + 1);
  };

  const handleDecrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      updateQuantity(cartItem.id, itemQuantity - 1);
    }
  };

  const handleDelete = () => {
    onDelete(cartItem.id);
  };

  return (
    <div className="cart-item">
      <div>
        <img src={cartItem?.image} alt={cartItem?.title} />
      </div>
      <div className="cart-item-details">
        <h3>{cartItem?.title}</h3>
        <p>{cartItem?.category}</p>
        <p>Description: {cartItem?.description}</p>
        <p className="cart-item-price">Price: ${cartItem?.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={handleDecrement}>-</button>
        <span>{itemQuantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="cart-item-remove">
        <button onClick={handleDelete}>Remove</button>
      </div>
    </div>
  );
};

export default CartItemCard;
