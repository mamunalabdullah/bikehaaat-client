import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { InventoriesHook } from '../Hook/InventoriesHook';

const ManageInventory = () => {
    const [inventories, setInventories] = InventoriesHook();

    const deleteHandle = id => {
        const proceed = window.confirm("Are you want to delete inventory ?");
        toast('Inventory delete');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
               method: 'DELETE' 
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const rest = inventories.filter(inventory => inventory._id !== id);
                setInventories(rest);
            })
        }
    }
    return (
        <div className="container py-5 ">
            <h1 className='my-2'>Manage Inventory</h1>
            <div className='w-50 text-start mx-auto'>
            
            {
                inventories.map(inventory => <div key={inventory._id}>
                    <div className='d-flex justify-content-between py-2'>
                        <h4>{inventory.name}</h4>
                        <div>
                        <button className='btn btn-danger' onClick={() => deleteHandle(inventory._id)}>Delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
        <ToastContainer />
        </div>
    );
};

export default ManageInventory;