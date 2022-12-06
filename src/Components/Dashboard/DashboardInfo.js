import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import ConfirmationModal from '../../ShareComponent/ConfirmationModal';
import VerificationModal from '../../ShareComponent/VerificationModal';
import Loader from '../SecondHand/Loader/Loader';

const DashboardInfo = () => {
    const { user, useloader } = useContext(AuthContextAPI);
    const [deleteingSeller, setDeleteingSeller] = useState(null);
    const [userVerified, SetUserverified] = useState(null);
    const [makeAdmin, setMakeAdmin] = useState(null);


    /// Data load from Mongodb
    const { data: mysellers = [], refetch } = useQuery({
        queryKey: ["mysellers"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/regisusers/seller');
            const data = res.json();
            return (data);
        }
    });

    // Make a Admin Function
    const hadleMakeAdmin = user => {
        fetch(`https://book-resale-server-site.vercel.app/regisusers/admin/${user}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }


    /// User Delete Config
    const hadleDeleteSeller = user => {
        fetch(`https://book-resale-server-site.vercel.app/regisusers/${user._id}`, {
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

    /// User Veified
    const hadleUserVerified = id => {
        fetch(`https://book-resale-server-site.vercel.app/regisusers/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success("Your User is  Verified!!");
            })
    }

    return (
        <div>
            <h2 className='text-3xl text-accent font-semibold'>All Seller</h2>
            <div>
                <div className="overflow-x-auto mt-10">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                                <th>Status</th>
                                <th>Request</th>
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
                                        mysellers?.map((myseller, i) =>
                                            <tr key={myseller._id}>
                                                <th>{i + 1}</th>
                                                <td>{myseller.name}</td>
                                                <td>{myseller.email}</td>
                                                <td>{myseller.role}</td>
                                                <td>
                                                    <label onClick={() => setDeleteingSeller(myseller)} htmlFor="confirmation-modal" className="btn text-white btn-sm btn-error mr-3 mb-2">Seller Delete</label>
                                                </td>
                                                <td>
                                                    {myseller?.verified ?
                                                        <>
                                                            <label className=' text-white p-2 rounded-lg font-bold btn-success'>User Verified</label>
                                                        </>
                                                        :
                                                        <>
                                                            <label onClick={() => SetUserverified(myseller._id)} htmlFor="confirmation-veri" className="btn text-black border-none btn-sm btn-error mr-3 mb-2 bg-orange-300">Unverified</label>
                                                        </>}
                                                </td>
                                                <td>
                                                    {myseller?.admin ?
                                                        <>
                                                            <label className=' text-white p-2 rounded-lg font-bold btn-success'>Admin User</label>
                                                        </>
                                                        :
                                                        <>
                                                            <label onClick={() => setMakeAdmin(myseller._id)} htmlFor="confirmation-veri" className="btn text-black border-none btn-sm btn-error mr-3 mb-2 bg-blue-300">Make Admin</label>
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
                {/* Seller Delete Information */}
                {
                    deleteingSeller && <ConfirmationModal
                        title='Are you sure you want to delete this seller?'
                        meassage="If you delete this seller, all information about this seller will be deleted from the database. Click on the Delete button to confirm."
                        successAction="Sure Delete"
                        successHandleButton={hadleDeleteSeller}
                        modalData={deleteingSeller}

                    ></ConfirmationModal>
                }
                {/* Seller Verification Confirmation */}
            </div>

            {
                userVerified && <VerificationModal
                    title='Do you really want to verify the user'
                    meassage="Before verifying the user, check all user information carefully, then verify."
                    successAction="I am Sure"
                    successHandleButton={hadleUserVerified}
                    modalData={userVerified}
                ></VerificationModal>
            }

            {
                makeAdmin && <VerificationModal
                    title='Are you Sure Make A Admin'
                    successAction="Make Admin"
                    successHandleButton={hadleMakeAdmin}
                    modalData={makeAdmin}

                ></VerificationModal>
            }

        </div>
    );
};

export default DashboardInfo;