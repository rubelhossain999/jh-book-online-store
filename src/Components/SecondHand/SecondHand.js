import React from 'react';
import SecondHandBooks from './SecondHandBooks';

const SecondHand = () => {
    return (
        <div className='max-w-[1340px] mx-auto text-accent mt-10'>
            <div className="container mx-auto p-4 my-6 space-y-2">
                <h2 className="text-3xl font-bold">All Second-Hand Books</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-3 gap-3'>
                    <SecondHandBooks></SecondHandBooks>
                </div>
            </div>
        </div>
    );
};

export default SecondHand;