import { useState } from "react";
import ProductDetails from "./ProductDetails";

const AllProducts = ({ products }) => {
  console.log("products", products);

  const [sortBy, setSortBy] = useState(""); // State to track sorting criteria

  const handleSortChange = (event) => {
    setSortBy(event.target.value); // Update sorting criteria when user selects an option
  };

  // Function to sort products based on selected criteria
  const sortProducts = (products) => {
    if (sortBy === "name") {
      return products.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "price") {
      return products.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === "rating") {
      return products.slice().sort((a, b) => {
        // Sort by rating count first, then by rating rate if counts are equal
        if (a.rating.count !== b.rating.count) {
          return b.rating.count - a.rating.count;
        } else {
          return b.rating.rate - a.rating.rate;
        }
      });
    } else {
      return products; // Return unsorted products if no sorting criteria selected
    }
  };

  // Call sortProducts function to get sorted products
  const sortedProducts = sortProducts(products);

  return (
    <div>
      {/* Sorting dropdown */}
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Render sorted products */}
      <div>
        {sortedProducts.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
