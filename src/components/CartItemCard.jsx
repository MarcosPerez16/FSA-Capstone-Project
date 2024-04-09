import { useState } from "react";

// imports here
const CartItemCard = ({ cartItem, quantity, updateQuantity, onDelete }) => {
  // logic here

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
    <div>
      <div>
        <img //can adjust when we style
          style={{ width: "200px", height: "200px" }}
          src={cartItem?.image}
          alt={cartItem?.title}
        />
      </div>
      <div>
        <h3>{cartItem?.title}</h3>
        <p>{cartItem?.category}</p>
        <p>Price: ${cartItem?.price}</p>
        <p>{cartItem?.description}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleDelete}>Remove</button>
      </div>
    </div>
  );
};

export default CartItemCard;
