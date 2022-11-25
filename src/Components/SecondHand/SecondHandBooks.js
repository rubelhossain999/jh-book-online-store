import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';

const SecondHandBooks = () => {
    const { user } = useContext(AuthContextAPI);

    const { data: userBooksData = [] } = useQuery({
        queryKey: ["userBooksData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = res.json();
            return (data);
        }
    });

    const { data: BooksData = [] } = useQuery({
        queryKey: ["BooksData"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/books');
            const data = res.json();
            return (data);
        }
    });

    console.log(BooksData);


    return (
        <>
            {
                BooksData?.map(BooksData =>
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-primary text-gray-100 mt-10">
                        <div className="flex space-x-4">
                            {userBooksData?.verified ?
                                <>
                                    <div className="relative flex-shrink-0 border-2 border-double border-secondary rounded-full">
                                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full text-gray-100 border-gray-900"></span>
                                        <Link><img src={userBooksData?.photoURL} alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700" /></Link>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="relative flex-shrink-0 border-2 border-double border-secondary rounded-full">
                                        <span className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-4 bg-red-600 border rounded-full border-gray-900 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-2 h-3 fill-current">
                                                <rect width="368" height="32" x="72" y="240"></rect>
                                            </svg>
                                        </span>
                                        <Link><img src={user?.photoURL} alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700" /></Link>
                                    </div>
                                </>}
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">Leroy Jenkins</a>
                                <span className="text-xs text-gray-400">4 hours ago</span>
                            </div>
                        </div>
                        <div>
                            {BooksData?.coverImage ?
                                <>
                                    <img src={BooksData?.coverImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                                </>
                                :
                                <>
                                    <img src="https://i.ibb.co/FHHPQPq/images.png" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                                </>
                            }
                            <h2 className="mb-1 text-xl font-semibold">{BooksData?.title.slice(0, 36) + "..."}</h2>
                            <p className="text-sm text-gray-400">{BooksData?.description.slice(0, 100) + "..."}</p>
                            <span className="mb-1 text-sm font-semibold text-secondary">Category : {BooksData?.categorie}</span>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <button className="btn btn-secondary text-white text-center">
                                Buy Now
                            </button>
                            <div className="flex space-x-2 text-2xl text-white">
                                Price: $ {BooksData?.price}
                            </div>
                        </div>
                    </div>


                )
            }

        </>
    );
};

export default SecondHandBooks;