import React from 'react';
import { FormLabel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SingleInventory } from '../Hook/SingleInventory';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory] = SingleInventory(id)
;

    const handleReStock = e => {
        e.preventDefault();
        const quantity = parseInt(e.target.reStock.value) + parseInt(inventory.quantity);
        const updateRestock = { quantity };
        const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(
                updateRestock
            ),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

        });
        toast('Restock complete');
        e.target.reset();
    }

    const handleQuantity = e => {
        e.preventDefault();
        const quantity = e.target.quantity.value - 1;
        const updateQuantity = { quantity }
        console.log(updateQuantity);
        const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(
                updateQuantity
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
        });
        toast('Deliver complete');
    }

    return (
        <div className='py-5'>
            <form onSubmit={handleReStock}>
                <input type="number" name="reStock" id="number" placeholder='Add quantity to restock' />
                <button type="submit" className='ms-2 bg-info border-0'>Restock</button>
            </form>
            <div className="card mx-auto my-2" style= {{width:18+"rem"}}>
                <img src={inventory.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{inventory.name}</h5>
                    <p className="card-text">{inventory.description}</p>
                    <p>Supplier: {inventory.supplier}</p>
                    <p>Price: {inventory.price}</p>
                    <form onSubmit={handleQuantity} >   
                        <div className="d-flex justify-content-around px-5">
                        <FormLabel className='mt-1'>Quantity: </FormLabel>
                        <input className='border border-white w-50' type="number" name="quantity" value={inventory.quantity} />
                        </div>
                        <button className='btn btn-danger'>Deliver</button>
                    </form>
                    
                </div>
            </div> 
        </div>
    );
};

export default InventoryDetails;