import { configureStore, createSlice } from "@reduxjs/toolkit";

const productClaim = createSlice({
  name: "product",
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
        item.product_price = action.payload.product_price
        item.created_by = action.payload.created_by
      }else{
        state.push({
          _id: action.payload._id,
          product_name: action.payload.product_name,
          product_code: action.payload.product_code,
          waranty_date: action.payload.waranty_date,
          product_price: action.payload.product_price,
          created_by: action.payload.created_by,
        });
      }

    },
    filter (state, action) {
      return state.filter((item) => item._id !== action.payload._id)
    }
  },
});

export const { getProduct, getFilter } = productClaim.actions;
export default productClaim.reducer;