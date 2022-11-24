import React from 'react';

const Authors = () => {
    return (
        <div className='max-w-[1340px] mx-auto text-accent mt-10'>
            <div className="container mx-auto p-4 my-6 space-y-2">
                <h2 className="text-3xl font-bold">Weekly Popular Authors</h2>
                <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-2 lg:gap-8 md:gap-3 gap-3'>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/8dMHbT1/9ca21332f-13863.jpg" />
                        <p className="text-xl font-semibold leading-tight">Saifur Rahman Khan</p>
                        <p className="dark:text-gray-400">Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/4TBXTLt/9c383b2ab634-6868.jpg" />
                        <p className="text-xl font-semibold leading-tight">Abul Asad</p>
                        <p className="dark:text-gray-400">Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/xmx24gR/2b36785b9-80983.jpg" />
                        <p className="text-xl font-semibold leading-tight">Zobair Al Mahmud</p>
                        <p className="dark:text-gray-400">Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/xYRMZhw/603675568-68583.jpg" />
                        <p className="text-xl font-semibold leading-tight">Farid Ahmed</p>
                        <p className="dark:text-gray-400">Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/SfTrsmq/2222ed505a94-1.jpg" />
                        <p className="text-xl font-semibold leading-tight">Humayun Ahmed</p>
                        <p className="dark:text-gray-400">Writer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/d2f0367/f05844bf5ab4-40266.jpg" />
                        <p className="text-xl font-semibold leading-tight">Jhangar Mahbub</p>
                        <p className="dark:text-gray-400">Writer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authors;