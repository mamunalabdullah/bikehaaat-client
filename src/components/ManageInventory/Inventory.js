import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Inventory = (props) => {
    const {id, picture, price, name, description} = props.inventory;
    const navigate = useNavigate();

    const inventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style= {{width:18+"rem"}}>
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.slice(0,150)}</p>
                    <p>Price: {price}</p>
                    <button className='btn btn-primary' onClick={() => inventoryDetail(id)}>Manage</button>
                </div>
            </div> 
        </div>
           
    );
};

export default Inventory;