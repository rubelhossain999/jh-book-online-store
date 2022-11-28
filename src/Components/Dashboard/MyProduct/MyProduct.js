import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContextAPI } from '../../../ContextAPI/AuthContext';
import ConfirmationModal from '../../../ShareComponent/ConfirmationModal';
import VerificationModal from '../../../ShareComponent/VerificationModal';
import Loader from '../../SecondHand/Loader/Loader';

const MyProduct = () => {
    const { user, useloader } = useContext(AuthContextAPI);
    const [deteteProduct, setDeteteProduct] = useState(null);
    const [adsrunProduct, setadsrunProduct] = useState(null);


    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ["myProducts"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/books?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return (data);
        }
    });

    console.log(myProducts);

    /// User product Delete
    const handledeteteProduct = user => {
        console.log(user);
        fetch(`http://localhost:5000/books/${user._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("Deleted Seller Data Success!!");
                }
            })
    }

    /// User product Update
    const handleUpdateProduct = user => {
        fetch(`http://localhost:5000/books/adsrun/${user}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success("Your Ads is Runing Success!!");
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
                                    <th>Categorie</th>
                                    <th>Price</th>
                                    <th>DELETE</th>
                                    <th>Update</th>
                                    <th>Advertisement</th>
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
                                                    <td>{myProducts?.title.slice(0, 15) + "..."}</td>
                                                    <td>{myProducts?.categorie}</td>
                                                    <td>{myProducts?.price} Taka</td>
                                                    <td>
                                                        <label onClick={() => setDeteteProduct(myProducts)} htmlFor="confirmation-modal" className='btn text-white btn-sm btn-error mr-3 mb-2'>DELETE</label>
                                                        <br />
                                                    </td>
                                                    <td>
                                                        <button className='btn text-white btn-sm btn-accent'>Udpate</button>
                                                    </td>
                                                    <td>
                                                        {myProducts?.adsrun ?
                                                            <>
                                                                <label className=' text-white p-2 rounded-lg font-bold btn-success '>Ads Running</label>
                                                            </>
                                                            :
                                                            <>
                                                                <label onClick={() => setadsrunProduct(myProducts?._id)} htmlFor="confirmation-veri" className='btn text-white btn-sm btn-info'>Ads Start</label>
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
                {deteteProduct && <ConfirmationModal
                    title='Are you sure you want to delete this Product?'
                    meassage="If you delete this Product, all information about this Product will be deleted from the database. Click on the Delete button to confirm."
                    successAction="Sure Delete"
                    successHandleButton={handledeteteProduct}
                    modalData={deteteProduct}
                ></ConfirmationModal>}

                {
                    adsrunProduct && <VerificationModal
                        title='Are you sure Ads Run?'
                        meassage="If you want to advertise this product through our website, then certain conditions must be followed. If yes then run."
                        successAction="Run Ads"
                        successHandleButton={handleUpdateProduct}
                        modalData={adsrunProduct}
                    ></VerificationModal>
                }

            </div>
        </div>
    );
};

export default MyProduct;