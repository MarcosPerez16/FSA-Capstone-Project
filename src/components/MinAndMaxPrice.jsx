import React, { useState } from "react";

const MinAndMaxPrice = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
    onFilter(newMinPrice, maxPrice);
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice);
    onFilter(minPrice, newMaxPrice);
  };

  return (
    <div>
      <label htmlFor="minPrice">Min Price:</label>
      <span>$</span>
      <input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={handleMinPriceChange}
      />

      <label htmlFor="maxPrice">Max Price:</label>
      <span>$</span>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={handleMaxPriceChange}
      />
    </div>
  );
};

export default MinAndMaxPrice;
