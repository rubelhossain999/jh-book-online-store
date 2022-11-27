import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
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
            const res = await fetch('http://localhost:5000/books/categorie/pdfbook');
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
                                    <div key={pdfBookItem._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-primary text-gray-100 lg:mt-10">
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
                                                        <Link><img src="https://i.ibb.co/DQxXd4F/icons.png" alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700" /></Link>
                                                    </div>
                                                </>}
                                            <div className="flex flex-col space-y-1">
                                                <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">{pdfBookItem?.authName}</a>
                                                <span className="text-xs text-gray-400">Post Time: {moment(pdfBookItem?.postTime).startOf('hour').fromNow()}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={pdfBookItem.image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                                            <h2 className="mb-1 text-xl font-semibold">{pdfBookItem.title}</h2>
                                            <p className="text-sm text-gray-400">{pdfBookItem?.description.slice(0, 100) + "..."}</p>
                                            <div className='grid lg:grid-cols-2 text-base grid-cols-1 text-center mt-4'>
                                                <span className="mb-1 font-semibold text-secondary">Category : {pdfBookItem?.categorie}</span>
                                                <span className="mb-1 font-semibold text-secondary">Location : {pdfBookItem?.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap justify-between items-center">
                                            <Link to={`/category/${pdfBookItem._id}`}>
                                                <button className="btn btn-secondary text-white text-center">
                                                    Buy Now
                                                </button>
                                            </Link>
                                            <div className="flex space-x-2 text-2xl text-white">
                                                Price: $ 45 usd
                                            </div>
                                        </div>
                                    </div>
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