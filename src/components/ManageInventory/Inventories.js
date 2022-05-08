import React, { useState, useEffect} from 'react';
import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventory from './Inventory';
import './Inventories.css';
import { Link } from 'react-router-dom';

const Inventories = () => {
    const [inventories, setInventories] = InventoriesHook([]);

    return (
        <div className="container py-3">
            <div className='row'>
                {
                    inventories.map( inventory => <Inventory key={inventory._id} inventory={inventory} />)
                }
            </div>  
            <Link to="/addinventory" ><button className='btn btn-info'>Add New Inventory</button></Link>      
        </div>
    );
};

export default Inventories;