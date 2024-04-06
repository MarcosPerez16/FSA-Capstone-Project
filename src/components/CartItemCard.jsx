import { useState } from "react";

// imports here
const CartItemCard = ({ cartItem, quantity, updateQuantity }) => {
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

  //need to work on this also:
  //Have a persistent cart to revisit and pick up where I left off.
  //(right now this doenst work when i refresh the page it goes back to the default number of items that were in the cart)
  // For example, I add items to my cart, close my window and go back to the website later, those items should persist.

  //after that we will work on removing the product from cart so deleting but remember we wont need to make
  //and API call they want us to use logic on the frontend

  //then we can start working on the checkout page and adding payment using dummy info and a confirmation page

  //reference the FIGMA sketch we made because we are going to need to add a checkout page
  // and other things like a total price in the shopping cart page
  //add a button at the bottom of the shopping cart page that navigates to the checkoutpage or we can do it all within the shopping cart page still undecided

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
      </div>
    </div>
  );
};

export default CartItemCard;
