const APIURL = "https://fakestoreapi.com";

//User login function
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();

    return result.token;
  } catch (error) {
    console.error("Error trying to login", error);
  }
};

//GET all products

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${APIURL}/products`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting all products", error);
  }
};

//GET single product

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${APIURL}/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting single product", error);
  }
};

// GET all categories
export const getAllCategories = async () => {
  try {
    const response = await fetch(`${APIURL}/products/categories`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting all categories", error);
  }
};
