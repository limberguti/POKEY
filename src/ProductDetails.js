import React from "react";
import Cart from "./Cart";

const ProductDetails = ({ match, ProductList }) => {
  const product = ProductList.find(item => item.id === parseInt(match.params.id));

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
