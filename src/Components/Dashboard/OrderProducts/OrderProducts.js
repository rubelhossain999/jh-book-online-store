import { useQuery } from '@tanstack/react-query';
import React from 'react';

const OrderProducts = () => {
    const{} = useQuery({
        queryKey: async() => {
            const res = await fetch(`http://localhost:5000/orders`);
        }
    });
    return (
        <div>
            <h2 className='text-3xl text-accent font-semibold'>Your All Order Products</h2>
        </div>
    );
};

export default OrderProducts;