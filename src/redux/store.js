import { configureStore } from "@reduxjs/toolkit";
import productClaimReducer from "./slices/product-claim";
import productReducer from "./slices/product";

export const store = configureStore({
  reducer: {
    productClaim: productClaimReducer,
    product: productReducer
  },
});

console.log("onCreate store");
store.subscribe(() => {
  console.log("store changed: ");
});


export default store;