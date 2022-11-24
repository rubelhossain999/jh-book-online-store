import React from 'react';
import SecondHand from '../SecondHand/SecondHand';
import AdvertisedItems from './AdvertisedItems';
import Authors from './Authors';
import Categories from './Categories';
import Hero from './Hero';
import MobileApp from './MobileApp';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
            <SecondHand></SecondHand>
            <Authors></Authors>
            <MobileApp></MobileApp>
        </div>
    );
};

export default Home;