import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h1>inventory details: {inventoryId}</h1>
        </div>
    );
};

export default InventoryDetails;