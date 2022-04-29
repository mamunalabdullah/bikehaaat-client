import React from 'react';
import { InventoriesHook } from '../Hook/InventoriesHook';
import Inventory from './Inventory';

const ManageInventory = () => {
    const [ inventories ] = InventoriesHook([]);
    return (
        <div className="container py-5">
            <div className='row'>
                {
                    inventories.map( inventory => <Inventory key={inventory.id} inventory={inventory} />)
                }  
            </div>
        </div>
    );
};

export default ManageInventory;