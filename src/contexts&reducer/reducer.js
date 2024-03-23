export const initialState = {
  products: [],
  total: 0,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload,
      };

    case "remove":
      return {
        ...state,
        products: action.payload,
      };

    case "calculate":
      return {
        ...state,
        total: action.payload,
      };

    default:
      throw new Error("Error");
  }
};

export default storeReducer;
