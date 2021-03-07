import {
  ADD_NEW_PRODUCT,
  ADD_PRODUCTS,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  UPDATE_PRODUCT,
} from "./actions";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      let m = {
        ...state,
        products: action.payload,
      };
      localStorage.setItem("products", JSON.stringify(m.products));
      return m;
    case ADD_NEW_PRODUCT:
      let product = {};
      product.id = state.products.length + 1;
      product.name = action.payload.productName;
      let j = state.products.reduce((a, b) => a + b.prices.length, 0);
      product.prices = [
        {
          id: ++j,
          price: action.payload.productPrice,
          date: new Date(),
        },
      ];
      let y = {
        ...state,
        products: [...state.products, product],
      };
      localStorage.setItem("products", JSON.stringify(y.products));
      return y;
    case DELETE_PRODUCT:
      let g = {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload.id),
      };
      localStorage.setItem("products", JSON.stringify(g.products));
      return g;
    case EDIT_PRODUCT:
      return {
        ...state,
        edit: state.products.filter((l) => l.id === action.payload)[0],
      };
    case UPDATE_PRODUCT:
      let r = {
        ...state,
        edit: null,
        products: [...state.products].map((p) => {
          let y = p;
          if (p.id === action.payload.id) {
            y.prices.push({
              id: state.products.reduce((a, b) => a + b.prices.length, 0) + 1,
              price: action.payload.productPrice,
              date: new Date(),
            });
          }
          return y;
        }),
      };
      localStorage.setItem("products", JSON.stringify(r.products));
      return r;
    default:
      return state;
  }
};

export default Reducer;
