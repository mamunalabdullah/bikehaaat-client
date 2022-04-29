import React from 'react';
import Banner from '../Banner/Banner';
import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventory from '../ManageInventory/Inventory';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    const [inventories] = InventoriesHook([]);
    return (
        <div>
            <Banner />
            {
                inventories.slice(0, 6).map( inventory => <Inventory />)
            }
            <Subscribe />
        </div>
    );
};

export default Home;