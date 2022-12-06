import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import ProductCards from '../../ShareComponent/ProductCards/ProductCards';
import Loader from '../SecondHand/Loader/Loader';


const PremiumBooks = () => {
    const { useloader } = useContext(AuthContextAPI);

    const { data: userBooksData = [] } = useQuery({
        queryKey: ["userBooksData"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/users');
            const data = res.json();
            return (data);
        }
    });


    const { data: premiumBookItems = [] } = useQuery({
        queryKey: ['premiumBookItems'],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/books/categorie/premiumbook');
            const data = res.json();
            return (data);
        }
    });
    console.log(premiumBookItems);

    return (
        <div>
            <div className="hero max-h-full" style={{ backgroundImage: `url("https://i.ibb.co/4dzBZ3d/hardcore-printing.jpg")` }}>
                <div className="hero-overlay bg-slate-800 bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl p-5 lg:mt-20 lg:mb-16">
                        <h1 className="mb-5 text-5xl text-white font-bold">Premium Books Store</h1>
                        <p className="mb-5 text-white">In this section, PDF books and academic and non-academic books can be sold and downloaded for free and can be studied without physical books through phone.</p>
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
                                premiumBookItems?.map(pdfBookItem => <>
                                   <ProductCards BooksData={pdfBookItem} ></ProductCards>
                                </>)
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default PremiumBooks;