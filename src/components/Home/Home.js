import React from 'react';
import Banner from '../Banner/Banner';
import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventories from '../ManageInventory/Inventories';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    const [inventories] = InventoriesHook([]);
    return (
        <div>
            <Banner />
            <Inventories />      
            <Subscribe />
        </div>
    );
};

export default Home;