import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/cartSlice";
import productReducer from "../products/productSlice";
import categoryReducer from "../categories/categorySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    categories: categoryReducer,
  },
});
