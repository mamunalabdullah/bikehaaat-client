import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = (props) => {
    const {id, picture, price, name, description, quantity, supplier} = props.inventory;
    const navigate = useNavigate();

    const inventoryDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style= {{width:18+"rem"}}>
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price: {price} | Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <button className='btn btn-primary' onClick={() => inventoryDetails(id)}>Manage</button>
                </div>
            </div> 
        </div>
           
    );
};

export default Inventory;