import { Provider } from "react-redux";
import Label from "../Elements/Input/Label";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { getProduct } from "../../redux/slices/product";
import { getProductItem } from "../../services/product/product-service";
import TableProduct from "./Table/Product/TableProduct";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    const productRequest = await getProductItem();
    if (productRequest.statusCode == 200) {
      for (let index = 0; index < productRequest.data.length; index++) {
        const element = productRequest.data[index];
        dispatch(getProduct(element));
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full">
        <div className="flex-1">
          <Label title="Dashboard "></Label>
        </div>
        <div className="flex-1 text-right">
          <Label title="Product"></Label>
        </div>
      </div>
      <hr />
      <br />
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <Link
            to="/master/product/add-product"
            className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
            onClick={() => {}}
          >
            Add Product
          </Link>
          <br />
          <TableProduct products={[]} />
        </div>
      </div>
    </div>
  );
};

export default Product;
