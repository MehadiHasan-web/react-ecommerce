import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";


function Card() {
    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table mt-4 border rounded">
                    {/* head */}
                    <thead>
                        <tr className='shadow-lg'>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className='mt-4'>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>
                                <div className='flex gap-2  '>
                                    <img className='w-10' src="https://th.bing.com/th/id/OIP.el0KeBvVxID4wj_nVb0zXAHaF6?rs=1&pid=ImgDetMain" alt="" />
                                    <button> <IoMdCloseCircleOutline className="font-bold text-lg text-red-400" /></button>
                                </div>
                            </th>
                            <td>$430</td>
                            <td>
                                <select className="select select-primary w-full select-sm w-16">
                                    <option disabled selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </td>
                            <td>$500</td>
                        </tr>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>
                                <div className='flex gap-2  '>
                                    <img className='w-10' src="https://th.bing.com/th/id/OIP.el0KeBvVxID4wj_nVb0zXAHaF6?rs=1&pid=ImgDetMain" alt="" />
                                    <button> <IoMdCloseCircleOutline className="font-bold text-lg text-red-400" /></button>
                                </div>
                            </th>
                            <td>$430</td>
                            <td>
                                <select className="select select-primary w-full select-sm w-16">
                                    <option disabled selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </td>
                            <td>$500</td>
                        </tr>


                    </tbody>
                </table>
                <div className="w-full text-end mt-3">
                <Link to="/order-page">
                <button className="btn btn-error btn-sm text-white">Order</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Card
