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

export const { getProduct } = productClaimSlice.actions;
export default productClaimSlice.reducer;