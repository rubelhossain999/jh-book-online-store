import React from 'react';
import { Link } from 'react-router-dom';
import Heroimg from '../../assets/bookreading.svg'

const Hero = () => {
    return (
        <section className="bg-primary text-gray-100">
            <div className="max-w-[1340px] mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
                    <p className='text-2xl pb-2'>50% discount on early purchase</p>
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Settle Your Daily life Issue in <span className='text-secondary'>1 Minute.</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Continually integrate premier value through stand-alone synergy. Dynamically build 2.0 collaboration and idea-sharing and standards compliant quality vectors. Energistically exploit mission-critical initiatives rather than.</p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" to="/category" className="px-8 py-3 text-lg font-semibold rounded bg-secondary text-white">All Books</Link>
                        <Link rel="noopener noreferrer" to="/category/freebooks" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Free Book</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={Heroimg} alt='Banner' className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Hero;