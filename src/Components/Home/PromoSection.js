import React from 'react';
import { Link } from 'react-router-dom';

const PromoSection = () => {
    return (
        <div class="relative overflow-hidden bg-white lg:mt-15">
            <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div class="sm:max-w-lg">
                        <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Out Books tops Cover</h1>
                        <p class="mt-4 text-xl text-gray-500">Most used and sold, such books are presented here on our website. Hope you like these books too and be able to sell them.</p>
                    </div>
                    <div>
                        <div class="mt-10">
                            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div class="flex items-center space-x-6 lg:space-x-8">
                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img src="https://i.ibb.co/cQ6VgpX/the-50-coolest-book-covers-15.jpg
" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/q0WHmcM/49712-15221914-2781052-cf76f665-image.png" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/wSKwp77/real-estate-book-cover-template-modern-city-scene-sketch-6922095.jpg
" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/vZQN2Qc/real-estate-book-cover-template-elegant-modern-city-buildings-scene-decor-6922096.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/H2HbftX/12a9feb9ab6871e8.jpg
" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/ryZpcjt/20-Best-Book-Covers-11-mobile-Master-At3x.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/6sNLLvR/4d520fb3-bab8-4d4a-a209-17731bb9da86.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link to="/category" class="inline-block rounded-md border border-transparent bg-secondary py-3 px-8 text-center font-medium text-white">Best Sells Collection</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoSection;