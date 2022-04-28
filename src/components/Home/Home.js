import React from 'react';
import { Route } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Inventories from '../ManageInventory/Inventories';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
        </div>
    );
};

export default Home;