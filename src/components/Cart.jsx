// imports here
import React from "react";
import CartItemCard from "./CartItemCard";
import CheckoutButton from "./CheckoutButton";

//could make a button in the cart where it lets us go back to the products page.

const Cart = ({ cart, products, setCart }) => {
  // logic here
  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDelete = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items:</p>
      {cart.map((item, index) => {
        const productItem = getAllItemDetails(item);
        return (
          <div key={index}>
            <CartItemCard
              cartItem={productItem}
              quantity={item.quantity}
              updateQuantity={updateQuantity}
              onDelete={handleDelete}
            />
          </div>
        );
      })}
      <CheckoutButton />
    </div>
  );
};

export default Cart;

Cart.jsx;
