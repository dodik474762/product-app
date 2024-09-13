import { useSelector } from "react-redux";
import Button from "../../../Elements/Button";
import { useDispatch } from "react-redux";
import { approve } from "../../../../services/product-claim/product-claim-services";
import { getProduct } from "../../../../redux/slices/product-claim";

const TableProductClaim = (props) => {
    const { products } = props;
    const dispatch = useDispatch();
    const product = useSelector((state) => state.productClaim);

    const handleApprove = async (product, status) => {
        const confirms = confirm(`Are you sure ${status} this product?`);
        if (confirms) {
            const approveReq = await approve(product._id, status);
            if (approveReq.statusCode == 200) {
                alert(`${status} Success`);
                dispatch(getProduct(approveReq.data));
            } else {
                alert(approveReq.message);
            }
        }
    };

    return (
        <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Product Name</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Product Code</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Status</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell text-sm">Approve Date</th>
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
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">{item.status == null ? 'PENDING' : item.status.toUpperCase()}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">{item.approved_date == null ? '' : item.approved_date.toString().substring(0, 10)}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">{item.created_by.toUpperCase()}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">
                                    <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                    {
                                        item.approved_date == null ? (
                                            <>
                                                <Button onClick={() => handleApprove(item, 'approve')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Approve</Button>
                                                &nbsp;
                                                <Button onClick={() => handleApprove(item, 'reject')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Reject</Button>
                                            </>
                                        ) : null
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

export default TableProductClaim;