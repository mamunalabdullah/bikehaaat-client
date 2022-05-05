import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const deliverHandle = () => {
        let quantity = inventory.quantity;
        let newQuantity = quantity - 1;
        quantity= newQuantity;
        console.log(quantity);
    } 
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
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
                    <button className='btn btn-primary' onClick={deliverHandle}>Deliver</button>
                </div>
            </div> 
        </div>
    );
};

export default InventoryDetails;