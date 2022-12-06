import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContextAPI } from '../../../ContextAPI/AuthContext';
import ConfirmationModal from '../../../ShareComponent/ConfirmationModal';
import Loader from '../../SecondHand/Loader/Loader';

const OrderProducts = () => {
    const { user, useloader } = useContext(AuthContextAPI);
    const [orderProductDelete, setOrderProductDelete] = useState(null);

    const { data: ordersdata = [], refetch } = useQuery({
        queryKey: ["ordersdata"],
        queryFn: async () => {
            const res = await fetch(`https://book-resale-server-site.vercel.app/ordersdata?email=${user.email}`);
            const data = res.json();
            return (data)
        }
    });

    console.log(ordersdata);

    // Delete The order items
    const handleDeleteProduct = id => {
        fetch(`https://book-resale-server-site.vercel.app/ordersdata/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("Order items Delete Success!!");
                }
            })
    }


    return (
        <div>
            <div>
                <div>
                    <h2 className='text-3xl text-accent font-semibold'>My Product</h2>
                    <div className="overflow-x-auto mt-10">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Picture</th>
                                    <th>Book Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody className='text-accent'>
                                {useloader ?
                                    <>
                                        <Loader></Loader>
                                    </>
                                    :
                                    <>
                                        {
                                            ordersdata?.map((ordersdata) =>
                                                <tr key={ordersdata?._id}>
                                                    <th>
                                                        <div className="flex flex-col items-center justify-center">
                                                            <div className="flex space-x-5">
                                                                <img alt="" className="w-16 h-14 ring-2 ring-offset-gray-800" src={ordersdata.pimge} />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>{ordersdata?.pname}</td>
                                                    <td>{ordersdata?.pri} Taka</td>
                                                    <td>
                                                        <label onClick={() => setOrderProductDelete(ordersdata?._id)} htmlFor="confirmation-modal" className='btn text-white btn-sm btn-error mr-3 mb-2'>DELETE</label>
                                                        <br />
                                                    </td>
                                                    <td>
                                                        {ordersdata?.adsrun ?
                                                            <>
                                                                <label className=' text-white p-2 rounded-lg font-bold btn-success '>Ads Running</label>
                                                            </>
                                                            :
                                                            <>
                                                                {
                                                                    ordersdata?.pri === "00" ?
                                                                        <div className='btn btn-success btn-sm'>
                                                                            Free Order
                                                                        </div>
                                                                        :
                                                                        <>
                                                                            {
                                                                                ordersdata?.paid ? <span className='btn btn-success btn-sm'>Paid</span> :
                                                                                    <>
                                                                                        <label htmlFor="confirmation-veri" className='btn text-white btn-sm btn-info'>
                                                                                            <Link to={`/dashboard/cartpayment/${ordersdata._id}`}>Pay Now</Link>
                                                                                        </label>
                                                                                    </>
                                                                            }
                                                                        </>
                                                                }
                                                            </>}
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                orderProductDelete && <ConfirmationModal
                    title="Are you sure Delete this Products"
                    successAction="Delete Order"
                    successHandleButton={handleDeleteProduct}
                    modalData={orderProductDelete}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default OrderProducts;