import { Provider } from "react-redux";
import Label from "../Elements/Input/Label";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProductClaim } from "../../services/product-claim/product-claim-services";

import { getProduct } from "../../redux/slices/product-claim";
import TableProductClaim from "./Table/ProductClaim/TableProductClaim";

const Dashboard = () => {
    const dispatch = useDispatch();

    const getProductClaims = async () => {
        const productRequest = await getProductClaim();
        if (productRequest.statusCode == 200) {
            for (let index = 0; index < productRequest.data.length; index++) {
                const element = productRequest.data[index];                
                dispatch(getProduct(element));
            }
        }        
    };

    useEffect(() => {
        getProductClaims();
    }, []);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row w-full">
                <div className="flex-1">
                    <Label title="Dashboard "></Label>
                </div>
                <div className="flex-1 text-right">
                    <Label title="Product Claim"></Label>
                </div>
            </div>
            <hr />
            <br />
            <div className="flex w-full">
                <TableProductClaim products={[]}/>
            </div>
        </div>
    )
};

export default Dashboard;