import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useContext } from 'react';
import { AuthContextAPI } from '../../../ContextAPI/AuthContext';
import Loader from '../../SecondHand/Loader/Loader';

const MyProduct = () => {
    const { user, useloader } = useContext(AuthContextAPI);


    const { data: myProducts = [] } = useQuery({
        queryKey: ["myProducts"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/books?email=${user?.email}`);
            const data = res.json();
            return (data);

        }
    });

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
                                    <th>Status</th>
                                    <th>Published Date</th>
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
                                                <tr key={myProducts._id}>
                                                    <th>{i + 1}</th>
                                                    <td>{myProducts.title.slice(0, 15) + "..."}</td>
                                                    <td>{myProducts.categorie}</td>
                                                    <td>{myProducts.price} Taka</td>
                                                    <td>
                                                        <button className='btn text-white btn-sm btn-error mr-3 mb-2'>DELETE</button>
                                                        <br />
                                                        <button className='btn text-white btn-sm btn-success'>UPDATE</button>
                                                    </td>
                                                    <td>{moment(myProducts.postTime).format('MMMM Do YYYY')}</td>
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
        </div>
    );
};

export default MyProduct;