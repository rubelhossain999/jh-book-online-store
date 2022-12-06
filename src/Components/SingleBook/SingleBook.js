import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContextAPI } from '../../ContextAPI/AuthContext';
import BookNowModal from '../../ShareComponent/BookNowModal';
import Categories from '../Home/Categories';

const SingleBook = () => {
    const { user } = useContext(AuthContextAPI)
    const singleData = useLoaderData();
    const [bookingNow, setBookingNow] = useState(null);
    const navigate = useNavigate();

    console.log(user);


    const handlebookingNow = event => {
        toast.success("You Request is booked");
        console.log("object");
    }

    // Add to Card Options
    const handleAddTocart = (id, price, title, image, emails )=> {
        const orderid = id;
        const email = emails;
        const pri = price;
        const pname = title;
        const pimge = image;
        
        const addToCart = {
            orderid,
            pri,
            pname,
            pimge,
            email
        }
        console.log(addToCart);

        fetch('https://book-resale-server-site.vercel.app/orders', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(addToCart)
        })
        .then(res => res.json())
      .then(data => {
        toast.success('Product Add to Cart Success!!');
        navigate('/dashboard/orderproducts');

      })
      .catch(err => {
        console.log(err);
      })
    }


    return (
        <section className="text-gray-100 max-w-[1340px] mx-auto">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between text-black border-b-2 mb-5 border-primary">
                <div className="shadow-primary shadow rounded-2xl flex items-center justify-center p-16 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={singleData.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="lg:text-3xl text-xl font-bold leading-none sm:text-6xl">{singleData.title}</h1>
                    <p className='text-secondary font-medium'>Category: {singleData.categorie}</p>
                    <p className="mt-6 text-lg mb-5">{singleData.description}</p>

                    <div className="flex flex-col font-semibold text-xl space-y-4 mb-5 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <p>Location: {singleData.location}</p>
                        <p>Phone: +8801700-123456</p>
                    </div>
                    <div className="flex text-secondary flex-col font-semibold text-xl space-y-4 mb-5 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <p>(Use-Time: {singleData.usetime})</p>
                        <p>(Delivery Time: 1 or 2 days)</p>
                    </div>
                    <div className="flex flex-col font-semibold text-xl space-y-4 mb-5 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <p>Sell Price: {singleData.price} Taka</p>
                        <p className='line-through'>Before Price: {singleData.beforeprice} Taka</p>
                    </div>

                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button onClick={() => handleAddTocart(singleData._id, singleData.price, singleData.title, singleData.image, user.email)} className="px-8 py-3 text-lg font-semibold rounded bg-secondary text-white">Direct Add To Cart</button>
                        <label onClick={setBookingNow} htmlFor="confirmation-book" className="px-8 py-3 cursor-pointer text-lg font-semibold border rounded border-black hover:bg-secondary hover:border-none hover:text-white">Book now</label>


                    </div>
                </div>

                {
                    bookingNow && <BookNowModal
                        title= "Do you want to book a meeting?"
                        name={user.displayName}
                        email={user.email}
                        itemname={singleData.title}
                        phone="+880170-123456"
                        price={singleData.price}
                        meetinglocation={singleData.location}
                        successAction="Submit Booking"
                        bookHandleButton={handlebookingNow}
                        modalbook={bookingNow}

                    ></BookNowModal>
                }

            </div>
            <div>
                <h2 className='text-3xl text-black font-semibold'>See The Other Category Products</h2>
                <Categories></Categories>
            </div>
        </section>
    );
};

export default SingleBook;