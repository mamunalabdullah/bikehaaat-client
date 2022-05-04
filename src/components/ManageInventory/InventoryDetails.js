import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    }, []);
    return (
        <div>
            <div className="card mx-auto my-5" style= {{width:18+"rem"}}>
                <img src={inventory.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{inventory.name}</h5>
                    <p className="card-text">{inventory.description}</p>
                    <p>Price: {inventory.price} | Quantity: {inventory.quantity}</p>
                    <p>Supplier: {inventory.supplier}</p>
                    <button className='btn btn-primary'>Deliver</button>
                </div>
            </div> 
        </div>
    );
};

export default InventoryDetails;