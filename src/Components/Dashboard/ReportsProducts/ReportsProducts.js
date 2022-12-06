import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContextAPI } from '../../../ContextAPI/AuthContext';
import ConfirmationModal from '../../../ShareComponent/ConfirmationModal';
//import VerificationModal from '../../../ShareComponent/VerificationModal';
import Loader from '../../SecondHand/Loader/Loader';

const ReportsProducts = () => {
    const { user, useloader } = useContext(AuthContextAPI);
    const [deteteProduct, setDeteteProduct] = useState(null);
    //const [adsrunProduct, setadsrunProduct] = useState(null);


    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ["myProducts"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/reports');
            const data = res.json();
            return (data);
        }
    });

    // Delete The order items
    const handledetetereportdata = id => {
        fetch(`https://book-resale-server-site.vercel.app/reportsdata/data/${id}`, {
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
                                    <th>No</th>
                                    <th>Book Name</th>
                                    <th>Repoter Name</th>
                                    <th>Email</th>
                                    <th>id</th>
                                    <th>DELETE</th>
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
                                            myProducts?.map((myProducts, i) =>
                                                <tr key={myProducts?._id}>
                                                    <th>{i + 1}</th>
                                                    <td>{myProducts?.title}</td>
                                                    <td>{myProducts?.name}</td>
                                                    <td>{myProducts?.email}</td>
                                                    <td>{myProducts?._id.slice(0, 10) + ".."}</td>
                                                    <td>
                                                        <label onClick={() => setDeteteProduct(myProducts._id)} htmlFor="confirmation-modal" className='btn text-white btn-sm btn-error mr-3 mb-2'>DELETE</label>
                                                        <br />
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
                {deteteProduct && <ConfirmationModal
                    title='Are you sure you want to delete this Product?'
                    meassage="If you delete this Product, all information about this Product will be deleted from the database. Click on the Delete button to confirm."
                    successAction="Sure Delete"
                    successHandleButton={handledetetereportdata}
                    modalData={deteteProduct}
                ></ConfirmationModal>}
{/* 
                {
                    adsrunProduct && <VerificationModal
                        title='Are you sure Ads Run?'
                        meassage="If you want to advertise this product through our website, then certain conditions must be followed. If yes then run."
                        successAction="Run Ads"
                        successHandleButton={handleUpdateProduct}
                        modalData={adsrunProduct}
                    ></VerificationModal>
                } */}

            </div>
        </div>
    );
};

export default ReportsProducts;