import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import ProductCards from '../../ShareComponent/ProductCards/ProductCards';
import Loader from '../SecondHand/Loader/Loader';


const PDFBooks = () => {
    const { useloader } = useContext(AuthContextAPI);

    const { data: userBooksData = [] } = useQuery({
        queryKey: ["userBooksData"],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/users');
            const data = res.json();
            return (data);
        }
    });


    const { data: pdfBookItems = [] } = useQuery({
        queryKey: ['freeBookItems'],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-site.vercel.app/books/categorie/pdfbook');
            const data = res.json();
            return (data);
        }
    });
    console.log(pdfBookItems);

    return (
        <div>
            <div className="hero max-h-full" style={{ backgroundImage: `url("https://i.ibb.co/gySLFc1/tablet-1632909-1280.jpg")` }}>
                <div className="hero-overlay bg-slate-800 bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg p-5 lg:mt-20 lg:mb-16">
                        <h1 className="mb-5 text-5xl text-white font-bold">PDF E-Books Store</h1>
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
                                pdfBookItems?.map(pdfBookItem => <>
                                    <ProductCards BooksData={pdfBookItem}></ProductCards>
                                </>)
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default PDFBooks;