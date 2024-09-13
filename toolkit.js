import { configureStore, createSlice } from "@reduxjs/toolkit";

const productClaimSlice = createSlice({
  name: "product-claim",
  initialState: [],
  reducers: {
    getProduct(state, action) {
      state.push({
        id: action.payload.id,
        product_name: action.payload.product_name,
        product_code: action.payload.product_code,
        waranty_date: action.payload.waranty_date,
        created_by: action.payload.created_by,
        approved_date: action.payload.approved_date,
      });
    },
  },
});

export const store = configureStore({
  reducer: {
    productClaim: productClaimSlice.reducer,
  },
});

console.log("store", store.getState());
store.subscribe(() => {
  console.log("store changed: ", store.getState());
});

store.dispatch(
  productClaimSlice.actions.getProduct({
    id: 1,
    product_name: "Product 1",
    product_code: "P001",
    waranty_date: "2022-01-01",
    created_by: "John Doe",
    approved_date: "2022-01-01",
  })
);

export const { getProduct } = productClaimSlice.actions;
export default productClaimSlice.reducer;
