import { configureStore } from "@reduxjs/toolkit";
import productClaimReducer from "./slices/product-claim";

export const store = configureStore({
  reducer: {
    productClaim: productClaimReducer,
  },
});

console.log("onCreate store", store.getState());
store.subscribe(() => {
  console.log("store changed: ", store.getState());
});


export default store;