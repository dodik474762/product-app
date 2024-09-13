import { useParams } from "react-router-dom";
import {
  getDetailProductItem,
  submit,
} from "../../services/product/product-service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import Label from "../Elements/Input/Label";
import { useEffect, useState } from "react";

const ProductForm = () => {
  const { id } = useParams();

  const [ product, setProduct ] = useState({
    product_name: "",
    product_price: "",
    waranty_date: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const product_name = event.target.product_name.value;
    const product_price = event.target.product_price.value;
    const waranty_date = event.target.waranty_date.value;

    if (product_name === "" || product_price === "" || waranty_date === "") {
      alert("Please enter all fields");
      return;
    }

    const params = {
      product_name: product_name,
      product_price: product_price,
      waranty_date: waranty_date,
      id: id,
    };
    const submitReq = await submit(params);

    if (submitReq.statusCode === 200) {
      alert("Product Submitted");
      window.location.href = "/master/product";
    } else {
      alert(submitReq);
    }
  };

  const fetchDetails = async () => {
    const productRequest = await getDetailProductItem(id);
    if (productRequest.statusCode == 200) {
        productRequest.data.waranty_date = productRequest.data.waranty_date.slice(0, 10);
        setProduct(productRequest.data);
    }


  };

  useEffect(() => {
    if (id) {
      fetchDetails();
    }
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row w-full">
          <div className="flex-1">
            <Label title="Dashboard "></Label>
          </div>
          <div className="flex-1 text-right">
            <Label title="Add Product"></Label>
          </div>
        </div>
        <hr />
        <br />
        <div className="flex w-full">
          <div className="flex flex-col w-full">
            <div className="w-1/3">
              <form onSubmit={handleSubmit}>
                <InputForm
                  type="text"
                  title="Product Name"
                  name="product_name"
                  value={product && product.product_name}
                ></InputForm>
                <InputForm
                  type="number"
                  title="Product Pridce"
                  name="product_price"
                  placeholder="100"
                  value={product.product_price}
                ></InputForm>
                <InputForm
                  type="date"
                  title="Warranty End Date"
                  name="waranty_date"
                  placeholder="2022-01-01"
                  value={product.waranty_date}
                ></InputForm>
                <Button type="submit" className="bg-gray-900 w-full">
                  Submit
                </Button>
              </form>
              <Button
                type="button"
                onClick={() => {
                  window.location.href = "/master/product";
                }}
                className="bg-gray-600 w-full my-2"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
