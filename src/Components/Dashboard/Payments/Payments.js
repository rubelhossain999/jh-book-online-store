import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51M9ZuXDzMgB5Hsur5xc7fhpbMcZKOTTvvtr370JNjH02dHwQRZ3F7FMu7FXleOtt5Yt450y54AJIIVcS4ysNV2T9006aJaoMlB');


const Payments = () => {
    const ordersdata = useLoaderData();
    return (
        <div>
            <h2 className='text-2xl text-black font-semibold'>Payment Product Name: <span className='font-bold'>{ordersdata.pname}</span></h2>
            <h2 className='text-2xl text-black font-semibold'>Total Price: <span className='font-bold'>{ordersdata.pri} TAKA</span></h2>
            <div className='w-1/2 shadow rounded-lg p-5 mt-5 text-bl shadow-black'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm ordersdata={ordersdata} />
                </Elements>
            </div>
        </div>
    );
};

export default Payments;