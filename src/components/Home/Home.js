import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../ManageInventory/Inventories';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />      
            <Subscribe />
        </div>
    );
};

export default Home;