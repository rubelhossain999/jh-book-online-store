import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = ({ ordersdata }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { pri, email, pname, _id } = ordersdata;
    const navigator = useNavigate();

    console.log(ordersdata);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://book-resale-server-site.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ pri }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [pri]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: pname,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {

            const paymentInfo = {
                pri,
                paymentIntentId: paymentIntent.id,
                email,
                payment: _id
            }

            console.log(paymentInfo);

            fetch('https://book-resale-server-site.vercel.app/cardpay', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setTransactionId(paymentIntent.id);
                        toast.success(`Payment Completed - ID: ${paymentIntent.id}`);
                        navigator('/dashboard/orderproducts');
                    }
                })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-5 bg-secondary text-white'
                    type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay Submit
                </button>
            </form>
            <>
                <p className='text-red-500'>{cardError}</p>
                {
                    success && <div>
                        <p className='text-green-500'><span className='font-bold'>Your Payment-ID:</span> {transactionId}</p>
                    </div>
                }
            </>
        </>
    );
};

export default CheckOutForm;