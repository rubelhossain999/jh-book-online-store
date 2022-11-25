import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center lg:ml-96 h-60 w-60'>
            <div className='w-16 h-16 border-2 border-dashed rounded-full animate-spin border-secondary'></div>
        </div>
    );
};

export default Loader;