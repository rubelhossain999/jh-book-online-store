import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <section className="p-6 my-6 mt-10 text-gray-100 max-w-[1340px] mx-auto">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-primary text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-800">
                            <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                            <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                            <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                            <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">750+ Free Books</p>
                        <Link to='/category/freebooks'>
                            <button className="capitalize mt-2 hover:bg-secondary hover:text-black btn btn-sm text-center">See All Free Books</button>
                        </Link>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-primary text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-800">
                            <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                            <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                            <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                            <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">500+ PDF Books</p>
                        <Link to='/category/pdfbook'>
                            <button className="capitalize mt-2 hover:bg-secondary hover:text-black btn btn-sm text-center">See All PDF Books</button>
                        </Link>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-primary text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-800">
                            <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                            <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                            <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                            <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">930+ Pro Books</p>
                        <Link to='/category/premiumbooks'>
                            <button className="capitalize mt-2 hover:bg-secondary hover:text-black btn btn-sm text-center">See All Pro Books</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;