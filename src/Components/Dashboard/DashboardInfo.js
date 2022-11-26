import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import Loader from '../SecondHand/Loader/Loader';

const DashboardInfo = () => {
    const { user, useloader } = useContext(AuthContextAPI);


    const { data: mysellers = [] } = useQuery({
        queryKey: ["mysellers"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/regisusers');
            const data = res.json();
            return(data);
        }
    });

    console.log(mysellers);


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
                                <th>Status</th>
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
                                        mysellers?.map((mysellers, i) =>
                                            <tr key={mysellers._id}>
                                                <th>{i + 1}</th>
                                                <td>{mysellers.name}</td>
                                                <td>{mysellers.email}</td>
                                                <td>{mysellers.role}</td>
                                                <td>
                                                    <button className='btn text-white btn-sm btn-error mr-3 mb-2'>DELETE</button>
                                                    <br />
                                                    <button className='btn text-white btn-sm btn-success'>UPDATE</button>
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
            <h2 className='text-3xl text-accent font-semibold pt-10'>All Customer</h2>
            <div>

            </div>
        </div>
    );
};

export default DashboardInfo;