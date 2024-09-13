import Label from "../Elements/Input/Label";


const Dashboard = () => {
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
                <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Name</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Code</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Status</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Approve Date</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Created By</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                                &nbsp;
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                            </td>
                        </tr>                       
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Dashboard;