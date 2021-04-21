import {
  ADD_CART,
  REMOVE_CART,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../Action/Actions";
import { item } from "../data";
import { toast } from "react-toastify";

export let initialState = {
  product: item || [],
  cart: [],
  Total: 0,
};

export let apiInitialState = {
  loading: false,
  users: [],
  error: "",
  update: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      const product = action.payload;

      const dummyProduct = [...state.product];
      const dummyCart = [...state.cart];
      // console.log("dummyCart", dummyCart);
      // console.log("dummyProduct", dummyProduct);
      const CartIndex = dummyCart.findIndex(
        (item) => item.id === action.payload.id
      );

      const ProductIndex = dummyProduct.findIndex(
        (item) => item.id === action.payload.id
      );
      let total = state.Total;
      total += action.payload.price;
      if (CartIndex === -1) {
        dummyCart.push(product);
        dummyProduct[ProductIndex].qty -= 1;
      } else {
        dummyCart[CartIndex].cQty += 1;
        dummyCart[CartIndex].price += dummyProduct[ProductIndex].price;
        dummyProduct[ProductIndex].qty -= 1;
      }
      // localStorage.getItem("login");
        // toast.success("Add Item!", { position: toast.POSITION.TOP_RIGHT });
      
      return {
        ...state,
        product: dummyProduct,
        cart: dummyCart,
        Total: total,
      };
    }
    case REMOVE_CART:
      // toast.error("Delete Item!", { position: toast.POSITION.TOP_RIGHT });
      const dummyCart = [...state.cart];
      const dummyProduct = [...state.product];
      // console.log("aciton", state);

      const dummyCartIndex = dummyCart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const dummyProductIndex = dummyProduct.findIndex((item) => {
        return item.id === action.payload.id;
      });

      const updateItem = (dummyCart[dummyCartIndex].cQty -= 1);
      let total = state.Total;
      total -= dummyProduct[dummyProductIndex].price;
      if (updateItem <= 0) {
        dummyCart.splice(dummyCartIndex, 1);
      } else {
        dummyCart[dummyCartIndex].price -=
          dummyProduct[dummyProductIndex].price;
      }

      return {
        ...state,
        cart: dummyCart,
        Total: total,
      };
    default:
      return state;
  }
};

export const apiReducer = (state = apiInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    case FETCH_USERS_SUCCESS:
      console.log("action", action.payload);
      console.log("state", state);
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateApiReducer = (state = apiInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      console.log("action", action.payload);
      console.log("state", state);
      return {
        ...state,
        loading: false,
        update: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
