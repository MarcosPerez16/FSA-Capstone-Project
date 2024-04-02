// imports here
import React from "react";
import CartItemCard from "./CartItemCard";

const Cart = ({ cart, products, setCart }) => {
  // logic here
  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items:</p>
      {cart.map((item, index) => {
        const productItem = getAllItemDetails(item);
        return (
          <CartItemCard
            key={index}
            cartItem={productItem}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;

Cart.jsx;
