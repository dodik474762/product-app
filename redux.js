import { legacy_createStore } from "redux";

//reducer
const productClaimReducer = (
  state = {
    product: [],
  },
  action
) => {
  switch (action.type) {
    case "APPROVED_CLAIM":
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case "GET_PRODUCT_CLAIM":
      return {
        ...state,
        product: [...state.product, action.payload],
      };

    default:
      return state;
  }
};

//store
const store = legacy_createStore(productClaimReducer);
console.log("store", store.getState());

//subscribe
store.subscribe(() => {
  console.log("store changed: ", store.getState());
});

//dispatch
const action1 = {
  type: "GET_PRODUCT_CLAIM",
  payload: {
    name: "Jamal",
    email: "jrios@icloud.com",
  },
};

store.dispatch(action1);
