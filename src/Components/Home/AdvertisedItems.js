import React from 'react';

const AdvertisedItems = () => {
    return (
        <div className='max-w-[1340px] mx-auto text-accent mt-10'>
            <div className="container mx-auto p-4 my-6 space-y-2">
                <h2 className="text-3xl font-bold">Top Selling Items</h2>
                <p className="text-xs font-bold">Advertised</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-3 gap-3'>
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-primary text-gray-100 mt-10">
                        <div className="flex space-x-4">
                            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">Leroy Jenkins</a>
                                <span className="text-xs text-gray-400">4 hours ago</span>
                            </div>
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                            <h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
                            <p className="text-sm text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <button className="btn btn-secondary text-white text-center">
                                Buy Now
                            </button>
                            <div className="flex space-x-2 text-2xl text-white        ">
                                Price: $ 45 usd
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-primary text-gray-100 mt-10">
                        <div className="flex space-x-4">
                            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">Leroy Jenkins</a>
                                <span className="text-xs text-gray-400">4 hours ago</span>
                            </div>
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                            <h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
                            <p className="text-sm text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <button className="btn btn-secondary text-white text-center">
                                Buy Now
                            </button>
                            <div className="flex space-x-2 text-2xl text-white        ">
                                Price: $ 45 usd
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-primary text-gray-100 mt-10">
                        <div className="flex space-x-4">
                            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">Leroy Jenkins</a>
                                <span className="text-xs text-gray-400">4 hours ago</span>
                            </div>
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                            <h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
                            <p className="text-sm text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
                        </div>
                        <div className="flex flex-wrap justify-between items-center">
                            <button className="btn btn-secondary text-white text-center">
                                Buy Now
                            </button>
                            <div className="flex space-x-2 text-2xl text-white        ">
                                Price: $ 45 usd
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;