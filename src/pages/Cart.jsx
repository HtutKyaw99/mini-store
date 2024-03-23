import React, { useContext } from "react";
import ProductContext from "../contexts&reducer/ProductContext";

export default function Cart() {
  const { products, removeProdcut } = useContext(ProductContext);

  const handleRemoveCart = (product) => {
    removeProdcut(product);
  };

  return (
    <div className="cartpage">
      <h3>Cart List</h3>
      <div className="item-list">
        {products.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price : {item.price}</p>
              <p>Count : {item.count}</p>
              <button onClick={() => handleRemoveCart(item)} className="btn">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
