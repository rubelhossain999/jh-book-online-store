import moment from 'moment';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import ProductCartReport from '../ProductCartReport';
import Userprofile from '../UserProfile/Userprofile';

const ProductCards = ({ BooksData }) => {
    const { user } = useContext(AuthContextAPI);
    const [reportProduct, setReportProduct] = useState(null);


    /// User Report Data
    const handleReportProduct = () => {
        const name = user.displayName;
        const email = user.email;
        const title = BooksData?.title;
        const report = "book";
        const productid= BooksData?._id;

        const reportValue = {
            name, email, title, report, productid
        }

        fetch('https://book-resale-server-site.vercel.app/reports', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(reportValue)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success("Books Items Report is Success!!");
        })
        .catch( error => {
            console.log(error);
        })
    }


    return (
        <>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-primary text-gray-100 mt-10">
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className="flex space-x-4">
                        <Userprofile BooksData={BooksData}></Userprofile>
                        <div>
                            <div className="flex flex-col space-y-1">
                                <p rel="noopener noreferrer" className="text-sm font-semibold">{BooksData?.authName}</p>
                                <span className="text-xs text-gray-400">Post Time: {moment(BooksData?.postTime).startOf('hour').fromNow()}</span>
                            </div>
                        </div>
                    </div>
                    <div className='ml-24'>
                        {user ? <><label onClick={() => handleReportProduct(user)} htmlFor="confirmation-report" className='btn btn-sm hover:bg-secondary hover:text-black'>Report</label></> : <></>}
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
            {
                reportProduct && <ProductCartReport
                    title='Why you want to report the Product'
                    name={user?.displayName}
                    bookname={BooksData?.title}
                    email={user?.email}
                    successAction="Report"
                    reporthanDle={handleReportProduct}
                    modalData={reportProduct}
                ></ProductCartReport>
            }
        </>
    );
};

export default ProductCards;