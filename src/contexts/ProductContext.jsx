import { useState, createContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const handleAddCart = (newItem) => {
    const itemIndex = cartItem.findIndex((item) => item.id === newItem.id);

    if (itemIndex === -1) {
      setCartItem((prev) => [...prev, { ...newItem, count: 1 }]);
      // setCartItem((prev) => [...prev, { ...newItem, count: 1 }]);
    } else {
      console.log("same item");
      console.log(itemIndex);
      const updateCart = [...cartItem];
      updateCart[itemIndex] = {
        ...updateCart[itemIndex],
        count: updateCart[itemIndex].count + 1,
      };

      setCartItem(updateCart);
    }
  };

  const handleRemoveCart = (id) => {
    console.log(id);
    const updateItems = cartItem.filter((item) => item.id != id);
    console.log(updateItems);
    setCartItem(updateItems);
  };

  return (
    <ProductContext.Provider
      value={{ cartItem, handleAddCart, handleRemoveCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
