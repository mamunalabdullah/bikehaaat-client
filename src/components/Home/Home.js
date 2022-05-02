import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventory from '../ManageInventory/Inventory';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    const [ inventories ] = InventoriesHook([]);
    return (
        <div>
            <Banner />
            <div className="container">
                <div className='row'>
                    {
                        inventories.slice(0, 6).map( inventory => <Inventory key={inventory._id} inventory={inventory} />)
                    } 
                </div>
                <Link to="/inventories" className="btn btn-primary my-5">Inventories</Link>
            </div>      
            <Subscribe />
        </div>
    );
};

export default Home;