import { useState, createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // const [cartItem, setCartItem] = useState([]);

  // const handleAddCart = (newItem) => {
  //   const itemIndex = cartItem.findIndex((item) => item.id === newItem.id);

  //   if (itemIndex === -1) {
  //     setCartItem((prev) => [...prev, { ...newItem, count: 1 }]);
  //     // setCartItem((prev) => [...prev, { ...newItem, count: 1 }]);
  //   } else {
  //     console.log("same item");
  //     console.log(itemIndex);
  //     const updateCart = [...cartItem];
  //     updateCart[itemIndex] = {
  //       ...updateCart[itemIndex],
  //       count: updateCart[itemIndex].count + 1,
  //     };

  //     setCartItem(updateCart);
  //   }
  // };

  // const handleRemoveCart = (id) => {
  //   console.log(id);
  //   const updateItems = cartItem.filter((item) => item.id != id);
  //   console.log(updateItems);
  //   setCartItem(updateItems);
  // };

  const [state, dispatch] = useReducer(initialState, reducer);

  const addProduct = (product) => {
    const updateCart = state.product;
    updateCart.push(product);
    dispatch({
      type: "add",
      payload: updateCart,
    });
  };

  const removeProduct = (product) => {
    const updateCart = state.product.filter((cur) => cur.name !== product.name);
    dispatch({
      type: "remove",
      payload: updateCart,
    });
  };

  const updatePrice = (product) => {
    let total = 0;
    product.forEach((prod) => (total += prod.price));
    dispatch({
      type: "calculate",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    products: state.product,
    addProduct,
    removeProduct,
  };

  return (
    <ProductContext.Provider const value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
