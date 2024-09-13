import { useSelector } from "react-redux";
import Button from "../../../Elements/Button";
import { useDispatch } from "react-redux";
import { getProduct, getFilter } from "../../../../redux/slices/product";
import { deleteProduct } from "../../../../services/product/product-service";
import { useEffect, useState } from "react";
import { claimProduct } from "../../../../services/product-claim/product-claim-services";

const TableProduct = (props) => {
    const { products } = props;
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const [roles, setRoles] = useState("");

    const handleEdit = async (product) => {
        const confirms = confirm(`Are you sure edit this product?`);
        if (confirms) {
            window.location.href = `/master/product/edit-product/${product._id}`
        }
    };

    const handleDelete = async (product) => {
        const confirms = confirm(`Are you delete this product?`);
        if (confirms) {
            const deleteReq = await deleteProduct(product._id);
            if (deleteReq.statusCode == 200) {
                alert(`Deleted Success`);
                dispatch(getFilter(product));
            } else {
                alert(deleteReq);
            }
        }
    };

    const handleClaim = async (product) => {
        const confirms = confirm(`Are you claim this product?`);
        if (confirms) {
            const claimReq = await claimProduct(product);
            if (claimReq.statusCode == 200) {
                alert(`Claim Success`);
                window.location.href = `/dashboard`;
            } else {
                alert(claimReq);
            }
        }
    };

    useEffect(() => {
        setRoles(localStorage.getItem("roles"));
    }, []);

    return (
        <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Product Name</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Product Code</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Product Price</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Created By</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Actions</th>
                </tr>
            </thead>
            <tbody className="block md:table-row-group">
                {
                    product.map((item, index) => {
                        return (
                            <tr key={item._id} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">{item.product_name}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">{item.product_code}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">{item.product_price}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">{item.created_by == null ? "-" : item.created_by.toUpperCase()}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">
                                    <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                    {
                                        roles.includes("staff") ? (
                                            <>
                                                <Button onClick={() => handleEdit(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</Button>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</Button>
                                            </>
                                        ) : (
                                            <Button onClick={() => handleClaim(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Klaim</Button>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default TableProduct;