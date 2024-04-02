// imports here
const CartItemCard = ({ cartItem, quantity }) => {
  // logic here

  //NEED TO ADD LOGIC TO THE + AND - BUTTONS ON THIS PAGE SO THAT THE QUANTITY CAN UPDATE WHEN ITS IN THE CART
  //FOR NOW WE CAN ADD TO CART WHEN WE ARE ON THE PRODUCTS PAGE, AND IN VIEW ITEM PAGE
  //BUT THE LOGIC NEEDS TO BE ADDED FOR INSIDE OF SHOPPING CART
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
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartItemCard;
