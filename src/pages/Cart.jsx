import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

export default function Cart() {
  const { cartItem, handleRemoveCart } = useContext(ProductContext);
  console.log(cartItem);
  return (
    <div className="cartpage">
      <h3>Cart List</h3>
      <div className="item-list">
        {cartItem.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price : {item.price}</p>
              <p>Count : {item.count}</p>
              <button onClick={() => handleRemoveCart(item.id)} className="btn">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
