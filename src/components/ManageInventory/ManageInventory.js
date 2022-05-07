import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { InventoriesHook } from '../Hook/InventoriesHook';
import './ManageInventory.css';

const ManageInventory = ({inventory}) => {
    const { name, picture, quantity, supplier, price } = inventory;
    const navigate = useNavigate();

    const edit = id =>{
        navigate(`/editInventory/${id}`);
    }
    const [inventories, setInventories] = InventoriesHook([]);

    const deleteHandle = id => {
        const proceed = window.confirm("Are you want to delete inventory ?");
        if(proceed){
            const url = `https://evening-wave-77311.herokuapp.com/inventory/${id}`;
            fetch(url, {
               method: 'DELETE' 
            })
            .then(res => res.json())
            .then(data => {
                toast('Inventory delete');
                const rest = inventories.filter(inventory => inventory._id !== id);
                setInventories(rest);
            })
        }
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <img className='border rounded-circle custom-size' src={picture} alt="" />
            </td>
            <td>{price} $</td>
            <td>{supplier}</td>
            <td>
                <div className="d-flex justify-content-around">
                    <button onClick={()=>edit(inventory._id)} className='btn btn-warning'><span><FaEdit /> </span></button>
                    <button onClick={()=>deleteHandle(inventory._id)} className='btn btn-danger'><span><AiFillDelete /></span></button>
                </div>
            </td>
        </tr>
    );
};

export default ManageInventory;