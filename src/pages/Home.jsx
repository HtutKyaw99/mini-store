import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    console.log("Rendered");
  };
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
