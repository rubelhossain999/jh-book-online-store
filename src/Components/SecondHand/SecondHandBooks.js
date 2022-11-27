import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import Userprofile from '../../ShareComponent/UserProfile/Userprofile';
import Loader from './Loader/Loader';

const SecondHandBooks = () => {
    const { user, useloader } = useContext(AuthContextAPI);

    const { data: userBooksData = [] } = useQuery({
        queryKey: ["userBooksData"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/users');
            const data = res.json();
            return (data);
        }
    });

    const { data: BooksData = [] } = useQuery({
        queryKey: ["BooksData"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/books');
            const data = res.json();
            return (data);
        }
    });



    return (
        <>
            {useloader ?
                <>
                    <Loader></Loader>
                </>
                :
                <>
                    {
                        BooksData?.map(BooksData =>
                            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-primary text-gray-100 mt-10">
                                <div className="flex space-x-4">
                                   <Userprofile BooksData={BooksData}></Userprofile>
                                    <div className="flex flex-col space-y-1">
                                        <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">{BooksData?.authName}</a>
                                        <span className="text-xs text-gray-400">Post Time: {moment(BooksData?.postTime).startOf('hour').fromNow()}</span>
                                    </div>
                                </div>
                                <div>
                                    {BooksData?.image ?
                                        <>
                                            <img src={BooksData?.image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                                        </>
                                        :
                                        <>
                                            <img src="https://i.ibb.co/FHHPQPq/images.png" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                                        </>
                                    }
                                    <h2 className="mb-1 text-xl font-semibold">{BooksData?.title.slice(0, 36) + "..."}</h2>
                                    <p className="text-sm text-gray-400">{BooksData?.description.slice(0, 100) + "..."}</p>
                                    <div className='grid lg:grid-cols-2 text-base grid-cols-1 text-center mt-4'>
                                        <span className="mb-1 font-semibold text-secondary">Category : {BooksData?.categorie}</span>
                                        <span className="mb-1 font-semibold text-secondary">Location : {BooksData?.location}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between items-center">
                                    <Link to={`/category/${BooksData._id}`}>
                                        <button className="btn btn-secondary text-white text-center">
                                            Buy Now
                                        </button>
                                    </Link>
                                    <div className="flex space-x-2 text-xl text-white">
                                       <span> Price : $ {BooksData?.price}</span>
                                       <span>-</span>
                                       <span className='line-through text-red-500'>$ {BooksData?.beforeprice}</span> 
                                    </div>
                                </div>
                            </div>


                        )
                    }
                </>}
        </>
    );
};

export default SecondHandBooks;