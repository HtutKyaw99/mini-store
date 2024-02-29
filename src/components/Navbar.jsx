import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductContext from "../contexts/ProductContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { cartItem } = useContext(ProductContext);

  return (
    <header>
      <nav className="flex navbar">
        <Link to="/">
          <h1>MINI STORE</h1>
        </Link>
        <Link to="/cart">
          <div className="cart">
            <FaShoppingCart fontSize={24} />
            <span>{cartItem?.length || 0}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}
