// imports here
const CartItemCard = ({ cartItem }) => {
  // logic here
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
      </div>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartItemCard;
