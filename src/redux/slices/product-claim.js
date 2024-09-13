import { configureStore, createSlice } from "@reduxjs/toolkit";

const productClaimSlice = createSlice({
  name: "product-claim",
  initialState: [],
  reducers: {
    getProduct(state, action) {
      const item = state.find(
        (item) => item._id === action.payload._id
      )

      if (item) {
        item.product_name = action.payload.product_name
        item.product_code = action.payload.product_code
        item.waranty_date = action.payload.waranty_date
        item.created_by = action.payload.created_by
        item.status = action.payload.status
        item.approved_date = action.payload.approved_date
      }else{
        state.push({
          _id: action.payload._id,
          product_name: action.payload.product_name,
          product_code: action.payload.product_code,
          waranty_date: action.payload.waranty_date,
          created_by: action.payload.created_by,
          status : action.payload.status,
          approved_date: action.payload.approved_date,
        });
      }

    },
  },
});

export const { getProduct } = productClaimSlice.actions;
export default productClaimSlice.reducer;