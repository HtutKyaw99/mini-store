import React, { useContext } from "react";
import ProductContext from "../contexts&reducer/ProductContext";

export default function Product({ product }) {
  const { addProduct } = useContext(ProductContext);

  const handleAddCart = (product) => {
    addProduct(product);
  };

  return (
    <div className="product-card" onClick={() => handleAddCart(product)}>
      <img src={product.image} alt={product.title} />
      <p className="title">{product.title}</p>
      <span className="price">Price : {product.price}</span>
      <button className="btn">Add to cart</button>
    </div>
  );
}
