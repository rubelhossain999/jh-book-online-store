import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import ProductCards from '../../ShareComponent/ProductCards/ProductCards';
import Loader from '../SecondHand/Loader/Loader';

const FreeBooks = () => {
    const { useloader } = useContext(AuthContextAPI);

    const { data: userBooksData = [] } = useQuery({
        queryKey: ["userBooksData"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/users');
            const data = res.json();
            return (data);
        }
    });


    const { data: freeBookItems = [] } = useQuery({
        queryKey: ['freeBookItems'],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/books/categorie/freebook');
            const data = res.json();
            return (data);
        }
    });
    console.log(freeBookItems);


    return (
        <div>
            <div className="hero max-h-full" style={{ backgroundImage: `url("https://i.ibb.co/T8q9z6K/2019-03-02-66706-1551461528-large.jpg")` }}>
                <div className="hero-overlay bg-slate-800 bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg p-5 lg:mt-20 lg:mb-16">
                        <h1 className="mb-5 text-5xl text-white font-bold">Free Book Store</h1>
                        <p className="mb-5 text-white">To get free books, you must register and order. Must follow the rules and regulations of the website and submit the books within the specified time.</p>
                    </div>
                </div>
            </div>
            {useloader ?
                <>
                    <Loader></Loader>
                </>
                :
                <>
                    <div className='max-w-[1340px] mx-auto'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mb-10 p-5'>
                            {
                                freeBookItems?.map(freeBookItem => <>
                                    <ProductCards BooksData={freeBookItem}></ProductCards>
                                </>)
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default FreeBooks;